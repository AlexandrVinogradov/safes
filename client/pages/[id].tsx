import { ProductPage } from '@/components/screens/ProductPage/ProductPage'
import { ServerProductCardType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

const Product: NextPage<{ selectedProduct: ServerProductCardType }> = ({ selectedProduct }) => {
	return <ProductPage selectedProduct={selectedProduct} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { id: 'valberg-karat-20' } }, { params: { id: 'valberg-karat-25' } }],
		fallback: 'blocking',
	}
}
export const getStaticProps: GetStaticProps<{ selectedProduct: ServerProductCardType }> = async ({ params }) => {
	const baseUrl = process.env.API_URL_PRODUCTS
	const url = `${baseUrl}/selected?safeAlias=${params?.id}`

	// const res = await fetch(url)
	// const selectedProduct = await res.json()

	const { fetchProducts } = useProductStore.getState()
	const selectedProduct = await fetchProducts(url)

	return {
		props: { selectedProduct },
		revalidate: 1,
	}
}

export default Product
