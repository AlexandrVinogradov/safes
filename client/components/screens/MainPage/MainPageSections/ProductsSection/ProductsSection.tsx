import { Button } from '@/components/Button/Button'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { container } from '@/styles/container'
import clsx from 'clsx'
import { ProductsMenu } from './ProductsMenu/ProductsMenu'
import { s } from './styles'
import { FC } from 'react'
import { ProductCardType } from '@/models/IProductStore'

type PropsType = {
	productsList: ProductCardType[]
}

export const ProductsSection: FC<PropsType> = ({ productsList }) => {
	return (
		<section className={clsx(s.section, container)}>
			<ProductsMenu />

			<div className={s.productsWrapper}>
				{productsList?.map((card) => (
					<ProductCard key={card.product_id} card={card} className={s.productCard} />
				))}
			</div>
			<Button className={s.button} href="/catalog" type="filled">
				В каталог
			</Button>
		</section>
	)
}
