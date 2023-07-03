import { useBasketStore } from '@/store/useBasketStore'
import { Button } from '@/components/Button/Button'
import { s } from './styles'
import clsx from 'clsx'

export const BasketSummary = () => {
	const basketItems = useBasketStore((state) => state.basketItems)

	const count = basketItems.reduce((acc, item) => {
		if (item.isDeleted) return acc
		return acc + item.count
	}, 0)
	const discount = basketItems.reduce((acc, item) => {
		if (item.isDeleted) return acc
		return acc + item.price * item.count - item.oldPrice * item.count
	}, 0)
	const summary = basketItems.reduce((acc, item) => {
		if (item.isDeleted) return acc
		return acc + item.price * item.count
	}, 0)

	return (
		<div className={s.basketSummary}>
			<p className={s.order}>Ваш заказ</p>

			<div className={s.summaryItem}>
				<p>Всего товаров:</p>
				<p>{count}</p>
			</div>
			<div className={clsx(s.summaryItem, s.lastSummaryItem)}>
				<p>Скидка:</p>
				<p>{discount.toLocaleString('ru-RU')} ₽</p>
			</div>

			<div className={clsx(s.summaryItem, s.boldSummaryItem)}>
				<p>ИТОГО:</p>
				<p>{summary.toLocaleString('ru-RU')} ₽</p>
			</div>

			<Button className={s.button}>Оформить заказ</Button>
		</div>
	)
}
