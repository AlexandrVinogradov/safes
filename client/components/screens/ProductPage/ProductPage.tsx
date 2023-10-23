import { SelectedProductType } from '@/models/IProductStore'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { ProductNameSection } from './sections/ProductNameSection/ProductNameSection'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { Layout } from '@/components/layout/layout'
import { Main } from '@/components/Main/Main'

type PropsType = {
	selectedProduct: SelectedProductType
	deliveryContent: string | null
}

// FIXME:
// Relative slider
// Что после быстрого заказа кнопки?

export const ProductPage = (props: PropsType) => {
	const { selectedProduct, deliveryContent } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Продукт', isActive: true, to: '/' },
	]

	return (
		<Layout title="SELECTED">
			<Main breadCrumbs={breadCrumbs}>
				<ProductNameSection selectedProduct={selectedProduct} />

				<DescriptionSection description={selectedProduct?.['description_ru-RU']} deliveryContent={deliveryContent || ''} />

				<ProductSliderSection title="Похожие товары" productsList={selectedProduct.relatedSafes} />
			</Main>
		</Layout>
	)
}
