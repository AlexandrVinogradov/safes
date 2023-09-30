import { ProductCard } from '@/components/ProductCard/ProductCard'
import { ProductCardType } from '@/models/IProductStore'

type PropsType = {
	card: ProductCardType
}

export const ProductSlide = (props: PropsType) => {
	const { card } = props

	return <ProductCard card={card} />
}
