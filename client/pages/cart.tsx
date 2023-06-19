import { GetServerSideProps, NextPage } from 'next'
import CartPage from '@/components/screens/CartPage/CartPage'
import { ServerProductCardType } from '@/models/IProductStore'
import { useProductStore } from '@/ooo/store/useProductStore'
import { getApiProductURL } from '@/helpers/getApiProductURL'

type PropsType = {
	products: ServerProductCardType[]
}

const AboutCompany: NextPage<PropsType> = ({ products }) => {
	return <CartPage products={products} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const products = await fetchProducts(getApiProductURL(context.query))

	return {
		props: { products },
	}
}

export default AboutCompany
