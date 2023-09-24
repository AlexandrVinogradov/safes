import { GetServerSideProps, NextPage } from 'next'
import CatalogPage from '@/components/screens/CatalogPage/CatalogPage'
import { ExtraValuesHandbook, ProductsType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { getApiProductURL } from '@/helpers/getApiProductURL'

type PropsType = {
	products: ProductsType
	extraValuesHandbook: ExtraValuesHandbook[]
}

const Catalog: NextPage<PropsType> = ({ products, extraValuesHandbook }) => {
	return <CatalogPage products={products} extraValuesHandbook={extraValuesHandbook} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts, fetchExtraValuesHandbook } = useProductStore.getState()
	const products = (await fetchProducts(getApiProductURL(context.query))) as ProductsType

	const extraValuesHandbook: ExtraValuesHandbook[] = await fetchExtraValuesHandbook()
	return {
		props: { products, extraValuesHandbook },
	}
}

export default Catalog
