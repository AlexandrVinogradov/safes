import CatalogPage from '@/components/screens/CatalogPage/CatalogPage'
import { ProductPage } from '@/components/screens/ProductPage/ProductPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { CategoryType } from '@/models/ICategoriesStore'
import { ExtraValuesHandbook, ProductsType, ServerProductCardType } from '@/models/IProductStore'
import { useCategoriesStore } from '@/store/useCategoriesStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next'

type PropsType = {
	selectedProduct: any
	category: CategoryType | null
	products: ProductsType | null
	relativeProductsList: ServerProductCardType[] | null
	extraValuesHandbook: ExtraValuesHandbook[] | null
}

const Product: NextPage<PropsType> = ({ selectedProduct, category, products, relativeProductsList, extraValuesHandbook }) => {
	if (selectedProduct) return <ProductPage selectedProduct={selectedProduct} relativeProductsList={relativeProductsList || []} />
	return (
		<CatalogPage products={products as ProductsType} category={category || undefined} extraValuesHandbook={extraValuesHandbook || []} />
	)
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts, fetchExtraValuesHandbook } = useProductStore.getState()
	const selectedProduct = (await fetchProducts(`${process.env.API_URL_PRODUCTS}/selected?safeAlias=${context.query?.id}`)) || null

	let relativeProductsList: ServerProductCardType[] | null = null
	if (selectedProduct) {
		// TODO: fetch relative products
		const relativeProducts = (await fetchProducts(getApiProductURL(context.query))) as ProductsType as ProductsType
		relativeProductsList = relativeProducts.list
	}

	let products: ProductsType | null = null
	let category: CategoryType | null = null
	let extraValuesHandbook: ExtraValuesHandbook[] | null = null
	if (!selectedProduct) {
		const { fetchCategories } = useCategoriesStore.getState()
		category = (await fetchCategories(`${process.env.API_URL_CATEGORIES}/${context.query?.id}`)) as CategoryType

		products = (await fetchProducts(getApiProductURL(context.query, category))) as ProductsType


		extraValuesHandbook = await fetchExtraValuesHandbook()
	}

	return {
		props: {
			selectedProduct,
			category,
			products,
			relativeProductsList,
			extraValuesHandbook,
		},
	}
}

export default Product
