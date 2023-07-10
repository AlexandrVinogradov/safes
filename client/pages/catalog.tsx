import { GetServerSideProps, NextPage } from 'next'
import CatalogPage from '@/components/screens/CatalogPage/CatalogPage'
import { ProductsType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { getApiProductURL } from '@/helpers/getApiProductURL'

type PropsType = {
	products: ProductsType
}

const Catalog: NextPage<PropsType> = ({ products }) => {
	return <CatalogPage products={products} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts } = useProductStore.getState()
	const products = (await fetchProducts(getApiProductURL(context.query))) as ProductsType

	return {
		props: { products },
	}
}

export default Catalog
