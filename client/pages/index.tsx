import MainPage from '@/components/screens/MainPage/MainPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { ProductsType, ServerProductCardType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next/types'

type PropsType = {
	productsList: ServerProductCardType[]
}

const Home: NextPage<PropsType> = ({ productsList }) => {
	return <MainPage productsList={productsList} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const products = (await fetchProducts(getApiProductURL(context.query))) as ProductsType
	const productsList = products.list

	return {
		props: { productsList },
	}
}

export default Home
