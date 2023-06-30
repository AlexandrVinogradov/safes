import { ProductCard } from '@/components/ProductCard/ProductCard'
import { ServerProductCardType } from '@/models/IProductStore'

type PropsType = {
	card: ServerProductCardType
}

export const ProductSlide = (props: PropsType) => {
	const { card } = props

	return <ProductCard card={card} />
}
