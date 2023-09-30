import Image from 'next/image'
import { CompareButtonPropsType } from './ComparisonButton/ComparisonButton'
import { BasketIcon } from '@/icons/BasketIcon'
import { ProductCardType } from '@/models/IProductStore'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { DescItem } from './DescItem/DescItem'
import { useBasketStore } from '@/store/useBasketStore'
import dynamic from 'next/dynamic'
import { s } from './styles'
import clsx from 'clsx'

const DynamicComparisonButton = dynamic<CompareButtonPropsType>(() => import('./ComparisonButton/ComparisonButton'), { ssr: false })

type PropsType = {
	card: ProductCardType
	className?: string
}

export const ProductCard = (props: PropsType) => {
	const { card, className } = props

	const addBasketItem = useBasketStore((state) => state.addBasketItem)

	const handleClickAddProduct = () => {
		addBasketItem({
			id: card.product_id,
			images: card.productImages,
			name: card['name_ru-RU'],
			price: card.product_price,
			oldPrice: card.product_old_price,
			code: card.product_ean,
			isDeleted: false,
		})
	}

	return (
		<article className={clsx(s.cardWrapper, className)}>
			<header>
				<div className={s.nameBlock}>
					<h3 className={s.name}>{card['name_ru-RU']}</h3>
					<DynamicComparisonButton card={card} />
				</div>

				<p className={s.code}>Код: {card.product_ean}</p>
			</header>
			<div className={s.imgWrapper}>
				<Image
					unoptimized={true}
					src={`https://prommetsafe.ru/components/com_jshopping/files/img_products/${card.productImages[0].image_name}`}
					alt={card['name_ru-RU']}
					width="0"
					height="0"
					className={s.image}
				/>
			</div>

			<ul className={s.desc}>
				<DescItem name="Производитель" data={card.manufacturer?.['name_ru-RU'].replace('Сейфы ', '')} />
				<DescItem name="Габариты (мм)" data={card.extra_field_15} />
				<DescItem name="Вес (кг)" data={card.product_weight} />

				<DescItem name="Взломостойкость" data={card.extra_field_3} />
				<DescItem name="Огнестойкость" data={card.extra_field_4} />
				<DescItem name="Вид замка" data={card.extra_field_9} />
				<DescItem name="Кол-во стволов" data={card.extra_field_8} />
				<DescItem name="Толщина металла" data={card.extra_field_20} />
			</ul>
			<div className={s.priceBlock}>
				{/* @ts-ignore */}
				<p className={s.price}>{card.product_price.toLocaleString('ru-RU')} ₽</p>
				{/* @ts-ignore */}
				<p className={s.priceBeforeDiscount}>{card.product_old_price.toLocaleString('ru-RU')} ₽</p>
			</div>
			<footer className={s.footer}>
				<Button href={`/${card['alias_ru-RU']}`}>Подробнее</Button>
				<IconButton onClick={handleClickAddProduct} className={s.iconButton} icon={<BasketIcon />} />
			</footer>
		</article>
	)
}
