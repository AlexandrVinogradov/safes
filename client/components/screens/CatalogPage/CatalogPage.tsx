import { Main } from '@/components/Main/Main'
import { Layout } from '../../layout/layout'
import { CatalogSection } from './CatalogPageSections/CatalogSection/CatalogSection'
import { ExtraValuesHandbook, ProductsType } from '@/models/IProductStore'
import { CategoryType } from '@/models/ICategoriesStore'
import { CategoriesSection } from './CatalogPageSections/CategoriesSection/CategoriesSection'
import { useRouter } from 'next/router'
import { BreadCrumbsType } from '@/components/BreadCrumbs/type'
import { getCategoryBreadCrumbs } from '@/helpers/getCategoryBreadCrumbs'
import { getSelectCategory } from '@/helpers/getSelectCategory'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { ProductsTitleSection } from '@/components/commonSections/ProductsTitleSection/ProductsTitleSection'
import { ManufacturerType } from '@/models/IManufacturersStore'
import { CatalogDescriptionSection } from './CatalogPageSections/CatalogDescriptionSection/CatalogDescriptionSection'

type PropsType = {
	products: ProductsType
	category?: CategoryType
	extraValuesHandbook: ExtraValuesHandbook[]
	manufacturer: ManufacturerType | null
}

const CatalogPage = (props: PropsType) => {
	const { products, category, extraValuesHandbook, manufacturer } = props

	let breadCrumbs: BreadCrumbsType = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Каталог', isActive: true },
	]

	let selectedCategory
	const { query } = useRouter()
	if (category) {
		breadCrumbs = getCategoryBreadCrumbs(category, query.id as string)
		selectedCategory = getSelectCategory(category, query.id as string)
	}

	const categoryTitle = selectedCategory?.['name_ru-RU']

	return (
		<Layout title="Каталог">
			<Main breadCrumbs={breadCrumbs}>
				<ProductsTitleSection title={categoryTitle || 'Каталог'} total={products.pagination.totalRows} />
				{selectedCategory && <CategoriesSection selectedCategory={selectedCategory} />}
				<CatalogSection products={products} category={category} extraValuesHandbook={extraValuesHandbook} />
				<CatalogDescriptionSection description={manufacturer?.['description_ru-RU']} />
				<ProductSliderSection title="Вы недавно смотрели" productsList={products.list} />
			</Main>
		</Layout>
	)
}

export default CatalogPage
