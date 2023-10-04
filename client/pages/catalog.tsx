import { GetServerSideProps, NextPage } from 'next'
import CatalogPage from '@/components/screens/CatalogPage/CatalogPage'
import { ExtraValuesHandbook, ProductsType } from '@/models/IProductStore'
import { useProductStore } from '@/store/useProductStore'
import { getApiProductURL } from '@/helpers/getApiProductURL'
import { useManufacturersStore } from '@/store/useManufacturersStore'
import { SimplManufactureType } from '@/models/IManufacturersStore'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'

type PropsType = {
	products: ProductsType
	extraValuesHandbook: ExtraValuesHandbook[]
	simpleManufacturers: SimplManufactureType[]
}

const Catalog: NextPage<PropsType> = ({ products, extraValuesHandbook, simpleManufacturers }) => {
	return <CatalogPage products={products} extraValuesHandbook={extraValuesHandbook} simpleManufacturers={simpleManufacturers} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
	const { fetchProducts, fetchExtraValuesHandbook } = useProductStore.getState()
	const { fetchManufacturers } = useManufacturersStore.getState()

	const products = (await fetchProducts(getApiProductURL(context.query))) as ProductsType
	const simpleManufacturers = (await fetchManufacturers(`${getClientServerUrl('manufacturers')}/simple`)) as SimplManufactureType[]

	const extraValuesHandbook: ExtraValuesHandbook[] = await fetchExtraValuesHandbook()
	return {
		props: { products, extraValuesHandbook, simpleManufacturers },
	}
}

export default Catalog
