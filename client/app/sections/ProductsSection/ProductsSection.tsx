import { useEffect } from 'react'
import { useAppStore } from '@/app/store/store'
import { Button } from '@/app/components/Button/Button'
import { ProductCard } from '@/app/components/ProductCard/ProductCard'
import { container } from '@/app/styles/container'
import clsx from 'clsx'
import { ProductsMenu } from './ProductsMenu/ProductsMenu'
import { s } from './styles'

export const ProductsSection = () => {
	const { products, fetchProducts } = useAppStore()

	useEffect(() => {
		fetchProducts()
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

			<pre>{JSON.stringify(products[0]?.['description_ru-RU'], undefined, 2)}</pre>

			<pre>{JSON.stringify(products, undefined, 2)}</pre>
		</section>
	)
}
