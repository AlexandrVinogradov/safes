import { Main } from '@/components/Main/Main'
import { Layout } from '../../layout/layout'
import { SearchResultSection } from './SearchResultSections/SearchResultSection/SearchResultSection'
import { ProductsType } from '@/models/IProductStore'
import { BreadCrumbsType } from '@/components/BreadCrumbs/type'
import { ProductsTitleSection } from '../../commonSections/ProductsTitleSection/ProductsTitleSection'
import { useRouter } from 'next/router'
import { s } from './styles'

type PropsType = {
	products: ProductsType
}

const SearchResultPage = (props: PropsType) => {
	const { products } = props

	const router = useRouter()

	let breadCrumbs: BreadCrumbsType = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Результаты поиска', isActive: true },
	]

	const title = (
		<>
			Результаты поиска:
			<span className={s.result}>{router.query.search}</span>
		</>
	)

	return (
		<Layout title="Результаты поиска">
			<Main breadCrumbs={breadCrumbs}>
				<ProductsTitleSection title={title} total={products.pagination.totalRows} />

				<SearchResultSection products={products} />
			</Main>
		</Layout>
	)
}

export default SearchResultPage
