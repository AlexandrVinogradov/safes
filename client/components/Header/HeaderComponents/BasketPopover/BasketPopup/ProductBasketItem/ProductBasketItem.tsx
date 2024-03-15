import { BasketItemType } from '@/models/IBasketStore'
import Image from 'next/image'
import { s } from './styles'
import { apiUrl } from '@/constants/apiUrl'
import { replaceImageExtensions } from '@/helpers/replaceImageExtensions'

type PropsType = {
	item: BasketItemType
}

export const ProductBasketItem = (props: PropsType) => {
	const { item } = props
	const { name, images, count, price } = item

	return (
		<li className={s.item}>
			<div className={s.nameBlock}>
				<Image
					unoptimized={true}
					src={`${apiUrl}/img_products/${replaceImageExtensions(images[0].image_name)}`}
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
