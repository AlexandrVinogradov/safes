import CatalogPage from '@/components/screens/CatalogPage/CatalogPage'
import { ProductPage } from '@/components/screens/ProductPage/ProductPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { getSelectCategory } from '@/helpers/getSelectCategory'
import { CategoryType } from '@/models/ICategoriesStore'
import { ServerProductCardType } from '@/models/IProductStore'
import { useCategoriesStore } from '@/store/useCategoriesStore'
import { useProductStore } from '@/store/useProductStore'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type PropsType = {
	selectedProduct: any
	category: CategoryType
	products: ServerProductCardType[] | null
}

const Product: NextPage<PropsType> = ({ selectedProduct, category, products }) => {
	if (selectedProduct) return <ProductPage selectedProduct={selectedProduct} />
	return <CatalogPage products={products || []} category={category} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		// TODO: add request for all product_id
		paths: [{ params: { id: 'valberg-karat-20' } }, { params: { id: 'valberg-karat-25' } }],
		fallback: 'blocking',
	}
}
export const getStaticProps: GetStaticProps<PropsType> = async ({ params }) => {
	const { fetchProducts } = useProductStore.getState()
	const selectedProduct = (await fetchProducts(`${process.env.API_URL_PRODUCTS}/selected?safeAlias=${params?.id}`)) || null

	let category = null
	let products: ServerProductCardType[] | null = null
	if (!selectedProduct) {
		const { fetchCategories } = useCategoriesStore.getState()
		category = await fetchCategories(`${process.env.API_URL_CATEGORIES}/${params?.id}` || '')

		products = ((await fetchProducts(getApiProductURL(params, category))) as ServerProductCardType[]) || null
	}

	return {
		props: {
			selectedProduct,
			category,
			products,
		},
	}
}

export default Product
