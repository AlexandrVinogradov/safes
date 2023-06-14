import { Button } from '@/app/components/Button/Button'
import { ProductCard } from '@/app/components/ProductCard/ProductCard'
import { container } from '@/app/styles/container'
import clsx from 'clsx'
import { ProductsMenu } from './ProductsMenu/ProductsMenu'
import { s } from './styles'
import { useProductStore } from '@/app/store/useProductStore'

export const ProductsSection = () => {
	const { products, fetchProducts } = useProductStore.getState()
	if (!products) fetchProducts(process.env.API_URL_PRODUCTS || '')

	return (
		<section className={clsx(s.section, container)}>
			<ProductsMenu />

			<div className={s.productsWrapper}>
				{products?.map((card) => (
					<ProductCard key={card.product_id} card={card} className={s.productCard} />
				))}
			</div>
			<Button href="/catalog" type="filled">
				В каталог
			</Button>
		</section>
	)
}
