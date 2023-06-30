import { Layout } from '@/components/layout/layout'
import { Main } from '../../Main/Main'
import { NotFoundContentSection } from './NotFoundSections/NotFoundContentSection/NotFoundContentSection'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { ServerProductCardType } from '@/models/IProductStore'
import { s } from './styles'

type PropsType = {
	products: ServerProductCardType[]
}

const NotFoundPage = (props: PropsType) => {
	const { products } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: '404', isActive: true },
	]

	return (
		<Layout title="notFound">
			<Main breadCrumbs={breadCrumbs}>
				<NotFoundContentSection />
				<ProductSliderSection className={s.productSliderSection} title="Вы недавно смотрели" products={products} />
			</Main>
		</Layout>
	)
}

export default NotFoundPage
