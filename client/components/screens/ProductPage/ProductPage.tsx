import { ServerProductCardType } from '@/models/IProductStore'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { ProductNameSection } from './sections/ProductNameSection/ProductNameSection'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { Layout } from '@/components/layout/layout'
import { Main } from '@/components/Main/Main'

type PropsType = {
	selectedProduct: ServerProductCardType
	relativeProductsList: ServerProductCardType[]
}

// FIXME: finish this page
export const ProductPage = (props: PropsType) => {
	const { selectedProduct, relativeProductsList } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Продукт', isActive: true, to: '/' },
	]
	return (
		<Layout title="SELECTED">
			<Main breadCrumbs={breadCrumbs}>
				<ProductNameSection selectedProduct={selectedProduct} />

				<DescriptionSection description={selectedProduct?.['description_ru-RU']} />

				<ProductSliderSection title="Похожие товары" productsList={relativeProductsList} />
			</Main>
		</Layout>
	)
}
