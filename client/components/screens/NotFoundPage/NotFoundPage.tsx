import { Layout } from '@/components/layout/layout'
import { Main } from '../../Main/Main'
import { NotFoundContentSection } from './NotFoundSections/NotFoundContentSection/NotFoundContentSection'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { ServerProductCardType } from '@/models/IProductStore'

type PropsType = {
	productsList: ServerProductCardType[]
}

const NotFoundPage = (props: PropsType) => {
	const { productsList } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: '404', isActive: true },
	]

	return (
		<Layout title="notFound">
			<Main breadCrumbs={breadCrumbs}>
				<NotFoundContentSection />
				<ProductSliderSection title="Вы недавно смотрели" productsList={productsList} />
			</Main>
		</Layout>
	)
}

export default NotFoundPage
