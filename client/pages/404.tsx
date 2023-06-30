import NotFoundPage from '@/components/screens/NotFoundPage/NotFoundPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { ServerProductCardType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next/types'

type PropsType = {
	products: ServerProductCardType[]
}

const NotFound: NextPage<PropsType> = ({ products }) => {
	return <NotFoundPage products={products} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const products = (await fetchProducts(getApiProductURL(context.query))) as ServerProductCardType[]

	return {
		props: { products },
	}
}

export default NotFound
