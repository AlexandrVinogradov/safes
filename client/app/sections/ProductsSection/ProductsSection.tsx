import { Button } from '@/app/components/Button/Button'
import { ProductCard } from '@/app/components/ProductCard/ProductCard'
import { products } from '@/app/components/ProductCard/products'
import { container } from '@/app/styles/container'
import clsx from 'clsx'
import { ProductsMenu } from './ProductsMenu/ProductsMenu'
import { s } from './styles'

export const ProductsSection = () => {
	const newProducts = [...products, ...products, ...products, products[0]]
	return (
		<section className={clsx(s.section, container)}>
			<ProductsMenu />
			
			<div className={s.productsWrapper}>
				{newProducts.map((card) => (
					<ProductCard key={card.id} card={card} className={s.productCard} />
				))}
			</div>
			<Button href="/catalog" type="filled">
				В каталог
			</Button>
		</section>
	)
}
