import { Button } from '@/components/Button/Button'
import { s } from './styles'

type PropsType = {
	isHovering: boolean
	handleMouseOver: () => void
	handleMouseOut: () => void
}

export const BasketPopup = (props: PropsType) => {
	const { isHovering, handleMouseOver, handleMouseOut } = props

	const handleClickGoToCatalog = () => handleMouseOut()

	return (
		<>
			{isHovering && (
				<div
					className={s.popup}
					// onMouseOver={handleMouseOver}
					//  onMouseOut={handleMouseOut}
				>
					<div className={s.space} />
					<p className={s.emptyBasketMessage}>В корзине нет товаров</p>

					<Button onClick={handleClickGoToCatalog} href="/catalog" className={s.toCatalogLink}>
						Перейти в каталог
					</Button>
				</div>
			)}
		</>
	)
}
