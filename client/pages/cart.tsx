import { GetServerSideProps, NextPage } from 'next'
import CartPage from '@/components/screens/CartPage/CartPage'
import { ServerProductCardType } from '@/models/IProductStore'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { useProductStore } from '@/store/useProductStore'

type PropsType = {
	products: ServerProductCardType[]
}

const AboutCompany: NextPage<PropsType> = ({ products }) => {
	return <CartPage products={products} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const products = (await fetchProducts(getApiProductURL(context.query))) as ServerProductCardType[]

	return {
		props: { products },
	}
}

export default AboutCompany
