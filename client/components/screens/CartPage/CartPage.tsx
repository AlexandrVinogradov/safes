import { CartContentSection } from './sections/CartContentSection/CartContentSection'
import { Main } from '../../Main/Main'
import { Layout } from '../../layout/layout'
import { ServerProductCardType } from '@/models/IProductStore'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { s } from './styles'

type PropsType = {
	products: ServerProductCardType[]
}

const СartPage = (props: PropsType) => {
	const { products } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Корзина', isActive: true },
	]

	return (
		<Layout title="Корзина">
			<Main breadCrumbs={breadCrumbs}>
				<CartContentSection />
				<ProductSliderSection className={s.productSliderSection} title="Вы недавно смотрели" products={products} />
			</Main>
		</Layout>
	)
}
export default СartPage
