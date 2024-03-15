import Image from 'next/image'
import { CompareButtonPropsType } from './ComparisonButton/ComparisonButton'
import { ProductCardType } from '@/models/IProductStore'
import { Button } from '../Button/Button'
import { DescItem } from './DescItem/DescItem'
import { BasketButtonPropsType } from './BasketButton/BasketButton'
import dynamic from 'next/dynamic'
import { s } from './styles'
import clsx from 'clsx'
import Link from 'next/link'
import { apiUrl } from '@/constants/apiUrl'
import { replaceImageExtensions } from '@/helpers/replaceImageExtensions'

const DynamicComparisonButton = dynamic<CompareButtonPropsType>(() => import('./ComparisonButton/ComparisonButton'), { ssr: false })
const DynamicBasketButton = dynamic<BasketButtonPropsType>(() => import('./BasketButton/BasketButton'), { ssr: false })

type PropsType = {
	card: ProductCardType
	className?: string
}

export const ProductCard = (props: PropsType) => {
	const { card, className } = props

	return (
		<article className={clsx(s.cardWrapper, className)}>
			<header>
				<div className={s.nameBlock}>
					<h3 className={s.name}>{card['name_ru-RU']}</h3>
					<DynamicComparisonButton card={card} iconStyles={s.comparisonButton} />
				</div>

				<p className={s.code}>Код: {card.product_ean}</p>
			</header>

			<div className={s.imgWrapper}>
				<Link className={s.imgLink} href={`/${card['alias_ru-RU']}`}>
					<Image
						unoptimized={true}
						src={`${apiUrl}/img_products/${replaceImageExtensions(card.image)}`}
						alt={card['name_ru-RU']}
						width="0"
						height="0"
						className={s.image}
					/>
				</Link>
			</div>

			<ul className={s.desc}>
				<DescItem name="Производитель" data={card.manufacturer?.['name_ru-RU']?.replace('Сейфы ', '')} />
				<DescItem name="Габариты (мм)" data={card.extra_field_15} />
				<DescItem name="Вес (кг)" data={card.product_weight} />

				<DescItem name="Взломостойкость" data={card.extra_field_3} />
				<DescItem name="Огнестойкость" data={card.extra_field_4} />
				<DescItem name="Вид замка" data={card.extra_field_9} />
				<DescItem name="Кол-во стволов" data={card.extra_field_8} />
				<DescItem name="Толщина металла" data={card.extra_field_20} />
			</ul>
			<div className={s.priceBlock}>
				<p className={s.price}>{card.product_price.toLocaleString('ru-RU')} ₽</p>
				<p className={s.priceBeforeDiscount}>{card.product_old_price.toLocaleString('ru-RU')} ₽</p>
			</div>
			<footer className={s.footer}>
				<Button className={s.moreButton} href={`/${card['alias_ru-RU']}`}>
					Подробнее
				</Button>
				<DynamicBasketButton card={card} />
			</footer>
		</article>
	)
}
