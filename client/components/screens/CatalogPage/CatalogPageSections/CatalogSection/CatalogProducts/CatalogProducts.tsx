import { ProductCard } from '@/components/ProductCard/ProductCard'
import { s } from './styles'
import { ServerProductCardType } from '@/models/IProductStore'
import clsx from 'clsx'

type PropsType = {
	products: ServerProductCardType[]
	className?: string 
}
export const CatalogProducts = (props: PropsType) => {
	const { products, className } = props

	if (!products.length) return <div>Не найдено</div>

	return (
		<div className={clsx(s.productsWrapper, className)}>
			{products?.map((card) => (
				<ProductCard key={card.product_id} card={card} />
			))}
		</div>
	)
}
