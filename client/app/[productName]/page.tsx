// import { notFound } from 'next/navigation'
import { useProductStore } from '../store/useProductStore'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { ProductNameSection } from './sections/ProductNameSection/ProductNameSection'

type PropsType = {
	params: { productName: string }
}

// FIXME: finish this page
export default async function ProductPage(props: PropsType) {
	const { params } = props
	const { selectedProduct, fetchProducts, fetchProductsError } = useProductStore.getState()

	const baseUrl = process.env.API_URL_PRODUCTS
	const url = `${baseUrl}/selected?safeAlias=${params.productName}`
	if (!selectedProduct) fetchProducts(url)

	// if (fetchProductsError === 'product does not exist') notFound()

	return (
		<main>
			<ProductNameSection
				image={selectedProduct?.image}
				code={selectedProduct?.product_ean}
				name={selectedProduct?.['name_ru-RU']}
				price={selectedProduct?.product_price}
				oldPrice={selectedProduct?.product_old_price}
			/>

			<DescriptionSection description={selectedProduct?.['description_ru-RU']} />

			{/* <pre>{JSON.stringify(selectedProduct, undefined, 2)}</pre> */}
		</main>
	)
}
