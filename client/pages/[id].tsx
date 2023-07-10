import CatalogPage from '@/components/screens/CatalogPage/CatalogPage'
import { ProductPage } from '@/components/screens/ProductPage/ProductPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { CategoryType } from '@/models/ICategoriesStore'
import { ProductsType } from '@/models/IProductStore'
import { useCategoriesStore } from '@/store/useCategoriesStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next'

type PropsType = {
	selectedProduct: any
	category: CategoryType | null
	products: ProductsType | null
	relativeProducts: ProductsType | null
}

const Product: NextPage<PropsType> = ({ selectedProduct, category, products, relativeProducts }) => {
	if (selectedProduct) return <ProductPage selectedProduct={selectedProduct} relativeProducts={relativeProducts as ProductsType} />
	return <CatalogPage products={products as ProductsType} category={category || undefined} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const selectedProduct = (await fetchProducts(`${process.env.API_URL_PRODUCTS}/selected?safeAlias=${context.query?.id}`)) || null

	let relativeProducts: ProductsType | null = null
	if (selectedProduct) {
		// TODO: fetch relative products
		relativeProducts = ((await fetchProducts(getApiProductURL(context.query))) as ProductsType) || null
	}

	let products: ProductsType | null = null
	let category: CategoryType | null = null
	if (!selectedProduct) {
		const { fetchCategories } = useCategoriesStore.getState()
		category = (await fetchCategories(`${process.env.API_URL_CATEGORIES}/${context.query?.id}`)) as CategoryType

		products = (await fetchProducts(getApiProductURL(context.query, category))) as ProductsType
	}

	return {
		props: {
			selectedProduct,
			category,
			products,
			relativeProducts,
		},
	}
}

export default Product
