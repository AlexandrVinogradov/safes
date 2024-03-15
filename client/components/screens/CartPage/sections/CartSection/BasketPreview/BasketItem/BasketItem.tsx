import { CrossIcon } from '@/icons/CrossIcon'
import { BasketItemType } from '@/models/IBasketStore'
import { ClickInput } from '@/components/ClickInput/ClickInput'
import { useBasketStore } from '@/store/useBasketStore'
import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import { ReturnIcon } from '@/icons/ReturnIcon'
import { s } from './styles'
import { apiUrl } from '@/constants/apiUrl'
import { replaceImageExtensions } from '@/helpers/replaceImageExtensions'

type PropsType = {
	item: BasketItemType
	isEditMode?: boolean
}

export const BasketItem = (props: PropsType) => {
	const { item, isEditMode = true } = props
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
			<div className={s.imageWrapper}>
				<Image
					unoptimized={true}
					src={`${apiUrl}/img_products/${replaceImageExtensions(item.images[0].image_name)}`}
					alt={name}
					width="0"
					height="0"
					className={s.image}
				/>
			</div>

			<div className={s.nameCell}>
				<p className={s.name}>{name}</p>
				<p className={s.code}>Код товара: {code}</p>
			</div>

			<div className={s.priceCell}>
				<div className={s.price}>{item.price.toLocaleString('ru-RU')} ₽</div>
				<div className={s.oldPrice}>{item.oldPrice.toLocaleString('ru-RU')} ₽</div>
			</div>

			<div className={s.countCell}>
				{isEditMode ? (
					<ClickInput value={item.count} className={s.clickInput} onChange={handleChangeClickInput} />
				) : (
					<p className={s.countItem}>
						<span className={s.countName}>Кол-во:</span> {item.count}
					</p>
				)}

				{isEditMode && (
					<button onClick={handleClickDeleteSelected} className={s.deleteButton}>
						<CrossIcon width="w-[14px]" />
						Удалить
					</button>
				)}
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
