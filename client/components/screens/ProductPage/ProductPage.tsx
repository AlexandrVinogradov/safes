import { ServerProductCardType } from '@/models/IProductStore'
import { ProductNameSection } from './sections/ProductNameSection/ProductNameSection'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { Layout } from '@/components/layout/layout'
import { Main } from '@/components/Main/Main'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'

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
				<ProductNameSection
					mainImage={selectedProduct?.image}
					images={selectedProduct.productImages.map((image) => image.image_name)}
					code={selectedProduct?.product_ean}
					name={selectedProduct?.['name_ru-RU']}
					// @ts-ignore
					price={selectedProduct?.product_price.toLocaleString('ru-RU')}
					// @ts-ignore
					oldPrice={selectedProduct?.product_old_price.toLocaleString('ru-RU')}
				/>

				<DescriptionSection description={selectedProduct?.['description_ru-RU']} />

				<ProductSliderSection title="Похожие товары" productsList={relativeProductsList} />
			</Main>
		</Layout>
	)
}
