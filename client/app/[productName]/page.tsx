'use client'
import { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { ProductNameSection } from './sections/ProductNameSection/ProductNameSection'

type PropsType = {
	params: { productName: string }
}

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
			<ProductNameSection />
			{params.productName}
		</main>
	)
}
