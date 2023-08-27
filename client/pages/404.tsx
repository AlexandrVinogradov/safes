import NotFoundPage from '@/components/screens/NotFoundPage/NotFoundPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { ProductsType, ServerProductCardType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next/types'

// type PropsType = {
// 	productsList: ServerProductCardType[]
// }

// const NotFound: NextPage<PropsType> = () =>
const NotFound: NextPage = () =>
	// { productsList }
	{
		return (
			<NotFoundPage
			// productsList={productsList}
			/>
		)
	}

// export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
// 	const { fetchProducts } = useProductStore.getState()
// 	const products = (await fetchProducts(getApiProductURL(context.query))) as ProductsType
// 	const productsList = products.list

// 	return {
// 		props: { productsList },
// 	}
// }

export default NotFound
