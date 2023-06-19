import MainPage from '@/components/screens/MainPage/MainPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { ServerProductCardType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next/types'

type PropsType = {
	products: ServerProductCardType[]
}

const Home: NextPage<PropsType> = ({ products }) => {
	return <MainPage products={products} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const products = await fetchProducts(getApiProductURL(context.query))

	return {
		props: { products },
	}
}

export default Home
