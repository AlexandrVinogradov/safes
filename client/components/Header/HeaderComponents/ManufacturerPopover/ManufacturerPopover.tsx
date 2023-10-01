import { useState } from 'react'
import { s } from './styles'
import { ManufacturerPopup } from './ManufacturerPopup/ManufacturerPopup'
import { ArrowDownIcon } from '@/icons/ArrowDownIcon'
import clsx from 'clsx'

export const ManufacturerPopover = () => {
	const [isHovering, setIsHovering] = useState(false)

	const handleMouseOver = () => setIsHovering(true)
	const handleMouseOut = () => setIsHovering(false)

	return (
		<div className={s.manufacturerButtonPopover}>
			<button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={clsx(s.manufacturer, isHovering && s.isHovering)}>
				Производители
				<ArrowDownIcon className={s.manufacturersIcon} />
			</button>

			<ManufacturerPopup
				setIsHovering={setIsHovering}
				isHovering={isHovering}
				handleMouseOver={handleMouseOver}
				handleMouseOut={handleMouseOut}
			/>
		</div>
	)
}
