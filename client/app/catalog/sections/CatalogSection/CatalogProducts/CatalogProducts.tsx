import { ProductCard } from '@/app/components/ProductCard/ProductCard'
import { s } from './styles'
import { ServerProductCardType } from '@/app/models/IProductStore'

type PropsType = {
	products: ServerProductCardType[] | null
}
export const CatalogProducts = (props: PropsType) => {
	const { products } = props

	return (
		<div className={s.productsWrapper}>
			{products?.map((card) => (
				<ProductCard key={card.product_id} card={card} />
			))}
		</div>
	)
}
