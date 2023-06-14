import { useProductStore } from '../store/useProductStore'
import { SearchParamsType } from '../types/SearchParamsType'
import { getApiProductURL } from './helpers/getApiProductURL'
import { CatalogSection } from './sections/CatalogSection/CatalogSection'

type PropsType = {
	searchParams: SearchParamsType
}

export default function CatalogPage(props: PropsType) {
	const { searchParams } = props

	const { products } = useProductStore.getState()
	const { fetchProducts } = useProductStore.getState()

	if (!products) {
		console.log(getApiProductURL(searchParams), 'APIAPIAPIAPIAPI')
		fetchProducts(getApiProductURL(searchParams))
	}

	return (
		<main>
			<CatalogSection searchParams={searchParams} products={products} />
		</main>
	)
}
