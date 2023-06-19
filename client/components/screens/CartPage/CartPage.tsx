import { WatchRecentlySection } from '@/components/commonSections/WatchRecentlySection/WatchRecentlySection'
import { CartContentSection } from './sections/CartContentSection/CartContentSection'
import { Main } from '../../Main/Main'
import { Layout } from '../../layout/layout'
import { ServerProductCardType } from '@/models/IProductStore'

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
				<WatchRecentlySection products={products} />
			</Main>
		</Layout>
	)
}
export default СartPage
