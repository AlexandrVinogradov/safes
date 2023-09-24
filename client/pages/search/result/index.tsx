import SearchResultPage from '@/components/screens/SearchResultPage/SearchResultPage'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { ProductsType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { GetServerSideProps, NextPage } from 'next/types'

type PropsType = {
	products: ProductsType
}

const SearchResult: NextPage<PropsType> = ({ products }) => {
	return <SearchResultPage products={products} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async ({ query }) => {
	const { fetchProducts } = useProductStore.getState()

	const products = (await fetchProducts(getApiProductURL({ ...query, pageSize: '16' }))) as ProductsType

	return {
		props: { products },
	}
}

export default SearchResult