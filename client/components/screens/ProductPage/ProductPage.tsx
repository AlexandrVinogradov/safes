import { ProductsType, ServerProductCardType } from '@/models/IProductStore'
import { ProductNameSection } from './sections/ProductNameSection/ProductNameSection'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { Layout } from '@/components/layout/layout'
import { Main } from '@/components/Main/Main'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { s } from './styles'

type PropsType = {
	selectedProduct: ServerProductCardType
	relativeProducts: ProductsType
}

// FIXME: finish this page
export const ProductPage = (props: PropsType) => {
	const { selectedProduct, relativeProducts } = props

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

				<ProductSliderSection className={s.productSliderSection} title="Похожие товары" products={relativeProducts.list} />
			</Main>
		</Layout>
	)
}
