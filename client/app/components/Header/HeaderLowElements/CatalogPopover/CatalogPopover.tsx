'use client'
import { Button } from '@/app/components/Button/Button'
import { CatalogMenuIcon } from '@/app/icons/CatalogMenuIcon'
import { CrossIcon } from '@/app/icons/CrossIcon'
import clsx from 'clsx'
import { useState } from 'react'
import { CatalogMenu } from '../CatalogMenu/CatalogMenu'
import { s } from './styles'

export const CatalogPopover = () => {
	const [isHovering, setIsHovering] = useState(false)

	const handleMouseOver = () => setIsHovering(true)

	const handleMouseOut = () => setIsHovering(false)

	return (
		<div className={s.catalogButtonPopover}>
			<Button
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				styleType="filled"
				className={clsx(isHovering && s.hoveredCatalogButton, s.catalogButton)}
			>
				{!isHovering ? <CatalogMenuIcon className={s.catalogButtonIcon} /> : <CrossIcon className={s.catalogButtonIcon} />}
				Каталог
			</Button>

			<CatalogMenu isHovering={isHovering} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
		</div>
	)
}
