import Image from 'next/image'
import { BasketIcon } from '@/app/icons/BasketIcon'
import { CompareIcon } from '@/app/icons/compareIcon'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { DescItem } from './DescItem/DescItem'
import { ProductCardType } from './IProductCard'
import { s } from './styles'

type PropsType = {
	card: ProductCardType
}

export const ProductCard = (props: PropsType) => {
	const { card } = props

	return (
		<article className={s.cardWrapper}>
			<header className={s.header}>
				<div className={s.nameBlock}>
					<h3 className={s.name}>{card.name}</h3>
					<IconButton className={s.iconButton} icon={<CompareIcon />} />
				</div>
				<p className={s.code}>Код: {card.code}</p>
			</header>

			<Image className={s.img} src={card.srcImg} alt={card.name} width={303} height={172} />

			<ul className={s.desc}>
				<DescItem name="Производитель" data={card.manufacturer} />
				<DescItem name="Габариты (мм)" data={card.dimensions} />
				<DescItem name="Вес (кг)" data={card.weight} />
				<DescItem name="Взломостойкость" data={card.burglaryResistance} />
				<DescItem name="Огнестойкость" data={card.fireResistance} />
				<DescItem name="Вид замка" data={card.castleType} />
			</ul>

			<div className={s.priceBlock}>
				<p className={s.price}>{card.price} ₽</p>
				<p className={s.priceBeforeDiscount}>{card.priceBeforeDiscount} ₽</p>
			</div>

			<footer className={s.footer}>
				<Button>Подробнее</Button>
				<IconButton className={s.iconButton} icon={<BasketIcon />} />
			</footer>
		</article>
	)
}
