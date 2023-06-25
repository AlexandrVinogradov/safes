import { ProductCard } from '@/components/ProductCard/ProductCard'
import { s } from './styles'
import { ServerProductCardType } from '@/models/IProductStore'

type PropsType = {
	products: ServerProductCardType[]
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
