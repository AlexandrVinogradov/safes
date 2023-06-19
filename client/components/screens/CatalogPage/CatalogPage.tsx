import { Main } from '@/components/Main/Main'
import { Layout } from '../../layout/layout'
import { CatalogSection } from './CatalogSection/CatalogSection'
import { ServerProductCardType } from '@/models/IProductStore'

type PropsType = {
	products: ServerProductCardType[]
}

const CatalogPage = (props: PropsType) => {
	const { products } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Каталог', isActive: true, to: '/' },
	]

	return (
		<Layout title="Каталог">
			<Main breadCrumbs={breadCrumbs}>
				<CatalogSection products={products} />
			</Main>
		</Layout>
	)
}

export default CatalogPage
