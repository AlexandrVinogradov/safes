import MainPage from '@/components/screens/MainPage/MainPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { NewsType } from '@/models/INewsStore'
import { ProductsType, ProductCardType } from '@/models/IProductStore'
import { useNewsStore } from '@/store/useNewsStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next/types'

type PropsType = {
	productsList: ProductCardType[]
	news: NewsType[]
}

const Home: NextPage<PropsType> = ({ productsList, news }) => {
	return <MainPage productsList={productsList} news={news} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const { fetchNews } = useNewsStore.getState()

	const products = (await fetchProducts(getApiProductURL(context.query))) as ProductsType
	const productsList = products?.list || null

	const news = (await fetchNews()) as NewsType[]

	return {
		props: { productsList, news },
	}
}

export default Home
