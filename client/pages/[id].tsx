import CatalogPage from '@/components/screens/CatalogPage/CatalogPage'
import { ProductPage } from '@/components/screens/ProductPage/ProductPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'
import { CategoryType } from '@/models/ICategoriesStore'
import { SelectedManufacturer, SimplManufactureType } from '@/models/IManufacturersStore'
import { ExtraValuesHandbook, ProductsType, SelectedProductType } from '@/models/IProductStore'
import { useCategoriesStore } from '@/store/useCategoriesStore'
import { useContentStore } from '@/store/useContentStore'
import { useManufacturersStore } from '@/store/useManufacturersStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next'

type PropsType = {
	selectedProduct: SelectedProductType
	category: CategoryType | null
	products: ProductsType | null
	extraValuesHandbook: ExtraValuesHandbook[] | null
	deliveryContent: string | null
	manufacturer: SelectedManufacturer | null
	simpleManufacturers: SimplManufactureType[] | null
}

const Product: NextPage<PropsType> = ({
	selectedProduct,
	category,
	products,
	extraValuesHandbook,
	deliveryContent,
	manufacturer,
	simpleManufacturers,
}) => {
	if (selectedProduct) return <ProductPage selectedProduct={selectedProduct} deliveryContent={deliveryContent} />
	return (
		<CatalogPage
			products={products as ProductsType}
			category={category || undefined}
			extraValuesHandbook={extraValuesHandbook || []}
			manufacturer={manufacturer}
			simpleManufacturers={simpleManufacturers}
		/>
	)
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts, fetchExtraValuesHandbook } = useProductStore.getState()
	const { fetchSelectedContent } = useContentStore.getState()

	const API_URL_PRODUCTS = getClientServerUrl('products')
	const API_URL_CATEGORIES = getClientServerUrl('categories')
	const API_URL_MANUFACTURERS = getClientServerUrl('manufacturers')

	const selectedProduct =
		((await fetchProducts(`${API_URL_PRODUCTS}/selected?safeAlias=${context.query?.id}`)) as SelectedProductType) || null
	// FIXME: content wii require every situation
	const deliveryContent = ((await fetchSelectedContent('delivery'))?.introtext as string) || null

	let products: ProductsType | null = null
	let category: CategoryType | null = null
	let manufacturer: SelectedManufacturer | null = null
	let extraValuesHandbook: ExtraValuesHandbook[] | null = null
	let simpleManufacturers: SimplManufactureType[] | null = null

	if (!selectedProduct) {
		const { fetchCategories } = useCategoriesStore.getState()
		const { fetchManufacturers } = useManufacturersStore.getState()

		category = ((await fetchCategories(`${API_URL_CATEGORIES}/${context.query?.id}`)) as CategoryType) || null
		manufacturer = ((await fetchManufacturers(`${API_URL_MANUFACTURERS}/${context.query?.id}`)) as SelectedManufacturer) || null
		simpleManufacturers = ((await fetchManufacturers(`${API_URL_MANUFACTURERS}/simple`)) as SimplManufactureType[]) || null

		if (category) {
			products = (await fetchProducts(getApiProductURL(context.query, category))) as ProductsType
		}

		if (manufacturer) {
			products =
				((await fetchProducts(
					getApiProductURL(context.query, undefined, undefined, String(manufacturer.manufacturer_id)),
				)) as ProductsType) || null
		}

		extraValuesHandbook = await fetchExtraValuesHandbook()
	}

	return {
		props: {
			selectedProduct,
			category,
			products,
			extraValuesHandbook,
			deliveryContent,
			manufacturer,
			simpleManufacturers,
		},
	}
}

export default Product
