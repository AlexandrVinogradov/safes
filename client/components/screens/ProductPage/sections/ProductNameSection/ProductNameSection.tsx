import { container } from '@/styles/container'
import Image from 'next/image'
import clsx from 'clsx'
import { s } from './styles'
import { Button } from '@/components/Button/Button'

type PropsType = {
	name: string | undefined
	code: string | undefined
	image: string | undefined
	price: string | undefined
	oldPrice: string | undefined
}

export const ProductNameSection = (props: PropsType) => {
	const { name, code, image, price, oldPrice } = props

	// const src = `https://prommetsafe.ru/components/com_jshopping/files/img_products/${image}`

	return (
		<section className={clsx(s.section, container)}>
			<div className={s.wrapper}>
				<div className=" max-w-[690px] w-full">
					<Image
						unoptimized={true}
						// loader={() => src}
						// src={src}
						src={`https://prommetsafe.ru/components/com_jshopping/files/img_products/${image}`}
						alt={name || 'Фото сейфа'}
						width="0"
						height="0"
						className={s.image}
					/>
				</div>

				<div className="w-full">
					<p className={s.code}>Код товара: {code}</p>
					<h1 className={s.name}>{name}</h1>
					<div className={s.prices}>
						{/* FIXME: .toLocaleString() */}
						<p className={s.oldPrice}>{oldPrice} ₽</p>
						<p className={s.price}>{price} ₽</p>
					</div>
					<button className={s.cheaper}>Нашли дешевле?</button>
					<div className={s.orderButtons}>
						<Button styleType="filled" className={s.oderButton}>
							В корзину
						</Button>
						<Button className={s.oderButton}>Быстрый заказ</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
