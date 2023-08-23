import { Button } from '@/components/Button/Button'
import { s } from './styles'
import { useBasketStore } from '@/store/useBasketStore'
import { ProductBasketItem } from './ProductBasketItem/ProductBasketItem'
import clsx from 'clsx'

type PropsType = {
	isHovering: boolean
	handleMouseOver: () => void
	handleMouseOut: () => void
}

export const BasketPopup = (props: PropsType) => {
	const { isHovering, handleMouseOver, handleMouseOut } = props
	const basketItems = useBasketStore((state) => state.basketItems)

	const handleClickRedirect = () => handleMouseOut()

	return (
		<>
			{isHovering && (
				<div className={s.popup} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
					<div className={s.space} />

					{basketItems.length === 0 ? (
						<p className={s.emptyBasketMessage}>В корзине нет товаров</p>
					) : (
						<ul className={s.basketItemsList}>
							{basketItems.map((item) => {
								if (item.isDeleted) return
								return <ProductBasketItem item={item} />
							})}
						</ul>
					)}

					{basketItems.length === 0 ? (
						<Button onClick={handleClickRedirect} href="/catalog" className={s.button}>
							Перейти в каталог
						</Button>
					) : (
						<>
							<Button onClick={handleClickRedirect} href="/cart" className={clsx([s.button, s.goToCartButton])}>
								Перейти в корзину
							</Button>
							<Button onClick={handleClickRedirect} styleType="filled" href="/checkout" className={s.button}>
								Оформить заказ
							</Button>
						</>
					)}
				</div>
			)}
		</>
	)
}
