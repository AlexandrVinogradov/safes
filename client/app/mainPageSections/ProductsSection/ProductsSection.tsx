import { useEffect } from 'react'
import { Button } from '@/app/components/Button/Button'
import { ProductCard } from '@/app/components/ProductCard/ProductCard'
import { container } from '@/app/styles/container'
import clsx from 'clsx'
import { ProductsMenu } from './ProductsMenu/ProductsMenu'
import { s } from './styles'
import { useProductStore } from '@/app/store/useProductStore'

export const ProductsSection = () => {
	const products = useProductStore((state) => state.products)
	const fetchProducts = useProductStore((state) => state.fetchProducts)
	const baseUrl = useProductStore((state) => state.baseUrl)

	useEffect(() => {
		fetchProducts(baseUrl)
	}, [])

	return (
		<section className={clsx(s.section, container)}>
			<ProductsMenu />

			<div className={s.productsWrapper}>
				{products.map((card) => (
					<ProductCard key={card.product_id} card={card} className={s.productCard} />
				))}
			</div>
			<Button href="/catalog" type="filled">
				В каталог
			</Button>

			{/* <pre>{JSON.stringify(products, undefined, 2)}</pre> */}
		</section>
	)
}
