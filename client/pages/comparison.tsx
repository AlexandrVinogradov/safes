import { GetServerSideProps, NextPage } from 'next'
import { ProductsType, ProductCardType } from '@/models/IProductStore'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { useProductStore } from '@/store/useProductStore'
import ComparisonPage from '@/components/screens/ComparisonPage/ComparisonPage'

type PropsType = {
	productsList: ProductCardType[]
}

const Comparison: NextPage<PropsType> = ({ productsList }) => {
	return <ComparisonPage productsList={productsList} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const products = (await fetchProducts(getApiProductURL(context.query))) as ProductsType
	const productsList = products.list

	return {
		props: { productsList },
	}
}

export default Comparison
