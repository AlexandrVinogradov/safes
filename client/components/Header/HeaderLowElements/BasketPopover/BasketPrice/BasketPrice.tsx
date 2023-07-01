import { useBasketStore } from '@/store/useBasketStore'
import { s } from './styles'

export const BasketPrice = () => {
	const basketItems = useBasketStore((state) => state.basketItems)
	const price = basketItems.reduce((acc, item) => acc + item.price * item.count, 0)

	return <p className={s.price}>{price.toLocaleString('ru-RU')} руб.</p>
}
