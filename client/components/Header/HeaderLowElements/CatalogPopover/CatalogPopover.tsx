import { Button } from '@/components/Button/Button'
import { CatalogMenuIcon } from '@/icons/CatalogMenuIcon'
import clsx from 'clsx'
import { useState } from 'react'
import { CatalogMenu } from './CatalogMenu/CatalogMenu'
import { s } from './styles'

export const CatalogPopover = () => {
	const [isHovering, setIsHovering] = useState(false)

	const handleMouseOver = () => setIsHovering(true)

	const handleMouseOut = () => setIsHovering(false)

	return (
		<div>
			<Button
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				styleType="filled"
				className={clsx(isHovering && s.hoveredCatalogButton, s.catalogButton)}
			>
				<CatalogMenuIcon className={s.catalogButtonIcon} />
				Каталог
			</Button>

			<CatalogMenu
				isHovering={isHovering}
				setIsHovering={setIsHovering}
				handleMouseOver={handleMouseOver}
				handleMouseOut={handleMouseOut}
			/>
		</div>
	)
}
