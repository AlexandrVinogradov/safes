import { useBasketStore } from '@/store/useBasketStore'
import { Button } from '@/components/Button/Button'
import { s } from './styles'
import clsx from 'clsx'
import { usePersistStore } from '@/hooks/usePersistStore'
import { useRouter } from 'next/router'

type PropsType = {
	isEditMode?: boolean
}

export const BasketSummary = (props: PropsType) => {
	const { isEditMode = true } = props

	const clearItems = useBasketStore((state) => state.clearItems)
	const basketStore = usePersistStore(useBasketStore, (state) => state)
	const basketItems = basketStore?.basketItems
	const router = useRouter()

	if (!basketItems) return null

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

	const getButtonProps = () => {
		const hasItemsForOrder = basketItems.some((item) => !item.isDeleted)

		if (hasItemsForOrder) {
			return {
				disabled: false,
				href: '/checkout',
			}
		} else {
			return {
				disabled: true,
			}
		}
	}

	const handleClickConfirm = () => {
		setTimeout(() => {
			clearItems()
		}, 1_000)
		router.replace('/order-is-processed')
	}

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
				{isEditMode ? <p>ИТОГО:</p> : <p>Всего к оплате:</p>}

				<p>{summary.toLocaleString('ru-RU')} ₽</p>
			</div>

			{isEditMode ? (
				<Button {...getButtonProps()} className={s.button}>
					Оформить заказ
				</Button>
			) : (
				<Button onClick={handleClickConfirm} className={s.button}>
					Подтвердить заказ
				</Button>
			)}
		</div>
	)
}
