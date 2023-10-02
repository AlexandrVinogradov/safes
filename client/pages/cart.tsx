import { GetServerSideProps, NextPage } from 'next'
import CartPage from '@/components/screens/CartPage/CartPage'
import { ProductsType, ProductCardType } from '@/models/IProductStore'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { useProductStore } from '@/store/useProductStore'

type PropsType = {
	productsList: ProductCardType[]
}

const AboutCompany: NextPage<PropsType> = ({ productsList }) => {
	return <CartPage productsList={productsList} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const products = (await fetchProducts(getApiProductURL(context.query))) as ProductsType
	const productsList = products.list

	return {
		props: { productsList },
	}
}

export default AboutCompany
