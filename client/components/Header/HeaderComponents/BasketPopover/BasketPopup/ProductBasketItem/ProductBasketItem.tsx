import { BasketItemType } from '@/models/IBasketStore'
import Image from 'next/image'
import { s } from './styles'

type PropsType = {
	item: BasketItemType
}

export const ProductBasketItem = (props: PropsType) => {
	const { item } = props
	const { name, image, count, price } = item

	return (
		<li className={s.item}>
			<div className={s.nameBlock}>
				<Image
					unoptimized={true}
					src={`https://prommetsafe.ru/components/com_jshopping/files/img_products/${image}`}
					alt={name}
					width={118}
					height={91}
				/>
				<p className={s.name}>{name}</p>
			</div>
			<div className={s.descItem}>
				<p>Количество</p>
				<p>{count}</p>
			</div>
			<div className={s.descItem}>
				<p>Стоимость, шт.</p>
				{/* @ts-ignore */}
				<p>{price.toLocaleString('ru-Ru')} ₽</p>
			</div>
		</li>
	)
}
