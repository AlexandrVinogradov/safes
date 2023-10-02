import { ComparisonSection } from './sections/ComparisonSection/ComparisonSection'
import { Main } from '../../Main/Main'
import { Layout } from '../../layout/layout'
import { ProductCardType } from '@/models/IProductStore'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'



type PropsType = {
	productsList: ProductCardType[]
}

const ComparisonPage = (props: PropsType) => {
	const { productsList } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Каталог', isActive: false, to: '/catalog' },
		{ name: 'Сравнение товаров', isActive: true },
	]

	return (
		<Layout title="Сравнение товаров">
			<Main breadCrumbs={breadCrumbs}>
				<ComparisonSection />
				<ProductSliderSection title="Вы недавно смотрели" productsList={productsList} />
			</Main>
		</Layout>
	)
}
export default ComparisonPage
