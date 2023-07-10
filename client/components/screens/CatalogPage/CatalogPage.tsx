import { Main } from '@/components/Main/Main'
import { Layout } from '../../layout/layout'
import { CatalogSection } from './CatalogPageSections/CatalogSection/CatalogSection'
import { ProductsType } from '@/models/IProductStore'
import { CategoryType } from '@/models/ICategoriesStore'
import { CategoriesSection } from './CatalogPageSections/CategoriesSection/CategoriesSection'
import { useRouter } from 'next/router'
import { BreadCrumbsType } from '@/components/BreadCrumbs/type'
import { getCategoryBreadCrumbs } from '@/helpers/getCategoryBreadCrumbs'
import { getSelectCategory } from '@/helpers/getSelectCategory'
import { TitleSection } from './CatalogPageSections/TitleSection/TitleSection'

type PropsType = {
	products: ProductsType
	category?: CategoryType
}

const CatalogPage = (props: PropsType) => {
	const { products, category } = props

	let breadCrumbs: BreadCrumbsType = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Каталог', isActive: true },
	]

	let selectedCategory
	if (category) {
		const { query } = useRouter()
		breadCrumbs = getCategoryBreadCrumbs(category, query.id as string)
		selectedCategory = getSelectCategory(category, query.id as string)
	}

	const categoryTitle = selectedCategory?.['name_ru-RU']

	return (
		<Layout title="Каталог">
			<Main breadCrumbs={breadCrumbs}>
				<TitleSection title={categoryTitle || 'Каталог'} total={products.pagination.totalRows} />

				{selectedCategory && <CategoriesSection selectedCategory={selectedCategory} />}

				<CatalogSection products={products} category={category} />
			</Main>
		</Layout>
	)
}

export default CatalogPage
