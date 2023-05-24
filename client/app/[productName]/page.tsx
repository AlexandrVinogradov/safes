'use client'
import { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { ProductNameSection } from './sections/ProductNameSection/ProductNameSection'

type PropsType = {
	params: { productName: string }
}

// FIXME: finish this page
export default function ProductPage(props: PropsType) {
	const { params } = props
	const fetchProducts = useProductStore((state) => state.fetchProducts)
	const baseUrl = useProductStore((state) => state.baseUrl)
	const selectedProduct = useProductStore((state) => state.selectedProduct)

	useEffect(() => {
		fetchProducts(`${baseUrl}/selected?safeAlias=${params.productName}`)
	}, [])

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

			<pre>{JSON.stringify(selectedProduct, undefined, 2)}</pre>
		</main>
	)
}
