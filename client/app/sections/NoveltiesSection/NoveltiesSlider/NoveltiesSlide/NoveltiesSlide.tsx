import { ProductCardType } from '@/app/components/ProductCard/IProductCard'
import { ProductCard } from '@/app/components/ProductCard/ProductCard'

type PropsType = {
	card: ProductCardType
}

export const NoveltiesSlide = (props: PropsType) => {
	const { card } = props

	return <ProductCard card={card} />
}
