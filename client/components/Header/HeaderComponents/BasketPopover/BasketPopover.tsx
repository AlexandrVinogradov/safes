import { useEffect, useState } from 'react'
import { BasketPopup } from './BasketPopup/BasketPopup'
import { BasketButton } from './BasketButton/BasketButton'
import { BasketPrice } from './BasketPrice/BasketPrice'
import { scrollToggle } from '@/helpers/scrollToggle'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	isShowPrice?: boolean
	className?: string
}

export const BasketPopover = (props: PropsType) => {
	const { isShowPrice = true, className } = props

	const [isHovering, setIsHovering] = useState(false)

	const handleMouseOver = () => setIsHovering(true)
	const handleMouseOut = () => setIsHovering(false)

	useEffect(() => {
		scrollToggle(isHovering)
	}, [isHovering])

	return (
		<div className={clsx(s.basketButtonPopover, className)}>
			<button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={s.basket}>
				<BasketButton />
				{isShowPrice && <BasketPrice />}
			</button>

			<BasketPopup isHovering={isHovering} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
		</div>
	)
}
