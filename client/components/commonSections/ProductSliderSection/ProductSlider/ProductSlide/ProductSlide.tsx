import { ProductCard } from '@/components/ProductCard/ProductCard'
import { ProductCardType } from '@/models/IProductStore'

type PropsType = {
	card: ProductCardType
	className?: string
}

export const ProductSlide = (props: PropsType) => {
	const { card, ...otherProps } = props

	return <ProductCard card={card} {...otherProps} />
}
