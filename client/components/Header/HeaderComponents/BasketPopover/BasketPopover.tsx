import { useState } from 'react'
import { BasketPopup } from './BasketPopup/BasketPopup'
import { BasketButton } from './BasketButton/BasketButton'
import { s } from './styles'
import { BasketPrice } from './BasketPrice/BasketPrice'

type PropsType = {
	isShowPrice?: boolean
}

export const BasketPopover = (props: PropsType) => {
	const { isShowPrice = true } = props

	const [isHovering, setIsHovering] = useState(false)

	const handleMouseOver = () => setIsHovering(true)
	const handleMouseOut = () => setIsHovering(false)

	return (
		<div className={s.basketButtonPopover}>
			<button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={s.basket}>
				<BasketButton />
				{isShowPrice && <BasketPrice />}
			</button>

			<BasketPopup isHovering={isHovering} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
		</div>
	)
}
