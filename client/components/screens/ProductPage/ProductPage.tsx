import { ServerProductCardType } from '@/models/IProductStore'
import { ProductNameSection } from './sections/ProductNameSection/ProductNameSection'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { Layout } from '@/components/layout/layout'
import { Main } from '@/components/Main/Main'

type PropsType = {
	selectedProduct: ServerProductCardType
}

// FIXME: finish this page
export const ProductPage = (props: PropsType) => {
	const { selectedProduct } = props

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
					price={selectedProduct?.product_price}
					oldPrice={selectedProduct?.product_old_price}
				/>

				<DescriptionSection description={selectedProduct?.['description_ru-RU']} />

				<pre>{JSON.stringify(selectedProduct, undefined, 2)}</pre>
			</Main>
		</Layout>
	)
}
