import CatalogPage from '@/components/screens/CatalogPage/CatalogPage'
import { ProductPage } from '@/components/screens/ProductPage/ProductPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'
import { CategoryType } from '@/models/ICategoriesStore'
import { ExtraValuesHandbook, ProductsType, SelectedProductType } from '@/models/IProductStore'
import { useCategoriesStore } from '@/store/useCategoriesStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next'

type PropsType = {
	selectedProduct: SelectedProductType
	category: CategoryType | null
	products: ProductsType | null
	extraValuesHandbook: ExtraValuesHandbook[] | null
}

const Product: NextPage<PropsType> = ({ selectedProduct, category, products, extraValuesHandbook }) => {
	if (selectedProduct) return <ProductPage selectedProduct={selectedProduct} />
	return (
		<CatalogPage products={products as ProductsType} category={category || undefined} extraValuesHandbook={extraValuesHandbook || []} />
	)
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts, fetchExtraValuesHandbook } = useProductStore.getState()
	const API_URL_PRODUCTS = getClientServerUrl('products')
	const API_URL_CATEGORIES = getClientServerUrl('categories')

	const selectedProduct =
		((await fetchProducts(`${API_URL_PRODUCTS}/selected?safeAlias=${context.query?.id}`)) as SelectedProductType) || null

	let products: ProductsType | null = null
	let category: CategoryType | null = null
	let extraValuesHandbook: ExtraValuesHandbook[] | null = null
	if (!selectedProduct) {
		const { fetchCategories } = useCategoriesStore.getState()
		category = (await fetchCategories(`${API_URL_CATEGORIES}/${context.query?.id}`)) as CategoryType

		products = (await fetchProducts(getApiProductURL(context.query, category))) as ProductsType

		extraValuesHandbook = await fetchExtraValuesHandbook()
	}

	return {
		props: {
			selectedProduct,
			category,
			products,
			extraValuesHandbook,
		},
	}
}

export default Product
