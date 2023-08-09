import { useBasketStore } from '@/store/useBasketStore'
import { s } from './styles'
import { usePersistStore } from '@/hooks/usePersistStore'

export const BasketPrice = () => {
	const basketStore = usePersistStore(useBasketStore, (state) => state)
	const basketItems = basketStore?.basketItems

	const price =
		basketItems?.reduce((acc, item) => {
			if (item.isDeleted) return acc
			return acc + item.price * item.count
		}, 0) || 0

	return <p className={s.price}>{price.toLocaleString('ru-RU')} руб.</p>
}
