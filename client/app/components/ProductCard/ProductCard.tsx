import Image from 'next/image'
import { BasketIcon } from '@/app/icons/BasketIcon'
import { CompareIcon } from '@/app/icons/CompareIcon'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { DescItem } from './DescItem/DescItem'
import { ServerProductCardType } from './IProductCard'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	card: ServerProductCardType
	className?: string
}

export const ProductCard = (props: PropsType) => {
	const { card, className } = props

	const src = `https://prommetsafe.ru/components/com_jshopping/files/img_products/${card.image}`

	return (
		<article className={clsx(s.cardWrapper, className)}>
			<header>
				<div className={s.nameBlock}>
					<h3 className={s.name}>{card['name_ru-RU']}</h3>
					<IconButton className={s.iconButton} icon={<CompareIcon />} />
				</div>

				<p className={s.code}>Код: {card.product_ean}</p>
			</header>
			<div className={s.imgWrapper}>
				<Image loader={() => src} src={src} alt={card['name_ru-RU']} width={303} height={172} />
			</div>

			<ul className={s.desc}>
				<DescItem name="Производитель" data={card.manufacturer['name_ru-RU']} />
				<DescItem name="Габариты (мм)" data={card.extra_field_15} />
				<DescItem name="Вес (кг)" data={card.product_weight} />
				<DescItem name="Взломостойкость" data={card.burglaryResistance} />
				<DescItem name="Огнестойкость" data={card.fireResistance} />
				<DescItem name="Вид замка" data={card.castleType} />
			</ul>
			<div className={s.priceBlock}>
				<p className={s.price}>{card.product_price} ₽</p>
				<p className={s.priceBeforeDiscount}>{card.product_old_price} ₽</p>
			</div>
			<footer className={s.footer}>
				<Button>Подробнее</Button>
				<IconButton className={s.iconButton} icon={<BasketIcon />} />
			</footer>
		</article>
	)
}
