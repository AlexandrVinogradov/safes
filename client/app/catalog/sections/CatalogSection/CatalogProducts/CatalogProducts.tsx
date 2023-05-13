import { useEffect } from 'react'
import { ProductCard } from '@/app/components/ProductCard/ProductCard'
import { useProductStore } from '@/app/store/createProductStore'
import { s } from './styles'

type PropsType = {
	url: string
}
export const CatalogProducts = (props: PropsType) => {
	const { url } = props

	const products = useProductStore((state) => state.products)
	const fetchProducts = useProductStore((state) => state.fetchProducts)

	useEffect(() => {
		fetchProducts(url)
	}, [url])

	return (
		<div className={s.productsWrapper}>
			{products.map((card) => (
				<ProductCard key={card.product_id} card={card} />
			))}
		</div>
	)
}
