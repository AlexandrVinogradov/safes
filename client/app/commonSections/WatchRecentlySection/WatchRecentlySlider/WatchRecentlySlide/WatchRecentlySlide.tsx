import { ProductCard } from '@/app/components/ProductCard/ProductCard'
import { ServerProductCardType } from '@/app/models/IProductStore'

type PropsType = {
	card: ServerProductCardType
}

export const WatchRecentlySlide = (props: PropsType) => {
	const { card } = props

	return <ProductCard card={card} />
}
