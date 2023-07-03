import { CrossIcon } from '@/icons/CrossIcon'
import { BasketItemType } from '@/models/IBasketStore'
import { ClickInput } from '@/components/ClickInput/ClickInput'
import { useBasketStore } from '@/store/useBasketStore'
import { Button } from '@/components/Button/Button'
import { ReturnIcon } from '@/icons/ReturnIcon'
import { s } from './styles'

type PropsType = {
	item: BasketItemType
}

export const BasketItem = (props: PropsType) => {
	const { item } = props
	const { name, code } = item

	const changeItemCount = useBasketStore((state) => state.changeItemCount)
	const deleteItemToggle = useBasketStore((state) => state.deleteItemToggle)

	const handleChangeClickInput = (operation: 'increase' | 'decrease') => {
		changeItemCount(item.id, operation)
	}
	const handleClickDeleteSelected = () => deleteItemToggle(item.id, 'delete')
	const handleClickReturnProduct = () => deleteItemToggle(item.id, 'return')

	return (
		<li className={s.basketItem}>
			<div className={s.image} />
			<div className={s.nameCell}>
				<p className={s.name}>{name}</p>
				<p className={s.code}>Код товара: {code}</p>
			</div>

			<div className={s.priceCell}>250 990 ₽</div>

			<div className={s.countCell}>
				<ClickInput value={item.count} onChange={handleChangeClickInput} />
				<button onClick={handleClickDeleteSelected} className={s.deleteButton}>
					<CrossIcon width="w-[14px]" />
					Удалить
				</button>
			</div>

			{item.isDeleted && (
				<div className={s.overlay}>
					<div className={s.content}>
						<p className={s.overlayMessage}>Товар удален из корзины</p>
						<Button onClick={handleClickReturnProduct} styleType="filled" className={s.overlayButton}>
							<ReturnIcon />
							Восстановить
						</Button>
					</div>
				</div>
			)}
		</li>
	)
}
