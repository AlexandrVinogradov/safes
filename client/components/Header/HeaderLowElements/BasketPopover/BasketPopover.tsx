import { BasketIcon } from '@/icons/BasketIcon'
import { useState } from 'react'
import { s } from './styles'
import { BasketPopup } from './BasketPopup/BasketPopup'

export const BasketPopover = () => {
	const [isHovering, setIsHovering] = useState(true)

	const handleMouseOver = () => setIsHovering(true)

	const handleMouseOut = () => setIsHovering(false)

	return (
		<div className={s.basketButtonPopover}>
			<button
				// onMouseOver={handleMouseOver}
				//  onMouseOut={handleMouseOut}
				className={s.basket}
			>
				<BasketIcon className={s.basketIcon} />
				<p className={s.price}>250 000 руб.</p>
			</button>

			<BasketPopup isHovering={isHovering} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
		</div>
	)
}
