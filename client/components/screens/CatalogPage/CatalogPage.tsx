import { Main } from '@/components/Main/Main'
import { Layout } from '../../layout/layout'
import { CatalogSection } from './CatalogPageSections/CatalogSection/CatalogSection'
import { ServerProductCardType } from '@/models/IProductStore'
import { CategoryType } from '@/models/ICategoriesStore'
import { CategoriesSection } from './CatalogPageSections/CategoriesSection/CategoriesSection'
import { useRouter } from 'next/router'
import { BreadCrumbsType } from '@/components/BreadCrumbs/type'
import { getCategoryBreadCrumbs } from '@/helpers/getCategoryBreadCrumbs'

type PropsType = {
	products: ServerProductCardType[]
	category?: CategoryType
}

const CatalogPage = (props: PropsType) => {
	const { products, category } = props

	let breadCrumbs: BreadCrumbsType = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Каталог', isActive: true },
	]

	if (category) {
		const { query } = useRouter()
		breadCrumbs = getCategoryBreadCrumbs(category, query.id as string)
	}

	return (
		<Layout title="Каталог">
			<Main breadCrumbs={breadCrumbs}>
				{category && <CategoriesSection category={category} />}

				<CatalogSection products={products} category={category} />
			</Main>
		</Layout>
	)
}

export default CatalogPage
