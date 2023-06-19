import { Layout } from '@/components/layout/layout'
import { Main } from '../../Main/Main'
import { NotFoundContentSection } from './NotFoundSections/NotFoundContentSection/NotFoundContentSection'
import { WatchRecentlySection } from '@/components/commonSections/WatchRecentlySection/WatchRecentlySection'
import { ServerProductCardType } from '@/models/IProductStore'

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
				<WatchRecentlySection products={products} />
			</Main>
		</Layout>
	)
}

export default NotFoundPage
