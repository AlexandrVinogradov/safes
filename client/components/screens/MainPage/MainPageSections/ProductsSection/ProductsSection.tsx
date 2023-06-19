import { Button } from '@/components/Button/Button'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { container } from '@/styles/container'
import clsx from 'clsx'
import { ProductsMenu } from './ProductsMenu/ProductsMenu'
import { s } from './styles'
import { FC } from 'react'
import { ServerProductCardType } from '@/models/IProductStore'

type PropsType = {
	products: ServerProductCardType[]
}

export const ProductsSection: FC<PropsType> = ({ products }) => {
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
