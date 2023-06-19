import { GetServerSideProps, NextPage } from 'next'
import CatalogPage from '@/components/screens/CatalogPage/CatalogPage'
import { ServerProductCardType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { getApiProductURL } from '@/helpers/getApiProductURL'

type PropsType = {
	products: ServerProductCardType[]
}

const Catalog: NextPage<PropsType> = ({ products }) => {
	return <CatalogPage products={products} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const products = await fetchProducts(getApiProductURL(context.query))

	return {
		props: { products },
	}
}

export default Catalog
