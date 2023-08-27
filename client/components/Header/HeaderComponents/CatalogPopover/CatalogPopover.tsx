import { Button } from '@/components/Button/Button'
import { CatalogMenuIcon } from '@/icons/CatalogMenuIcon'
import clsx from 'clsx'
import { useState } from 'react'
import { CatalogMenu } from './CatalogMenu/CatalogMenu'
import { s } from './styles'

type PropsType = {
	className?: string
}

export const CatalogPopover = (props: PropsType) => {
	const { className } = props

	const [isHovering, setIsHovering] = useState(false)

	const handleMouseOver = () => setIsHovering(true)
	const handleMouseOut = () => setIsHovering(false)

	return (
		<>
			<Button
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				styleType="filled"
				className={clsx(isHovering && s.hoveredCatalogButton, s.catalogButton, className)}
			>
				<CatalogMenuIcon className={s.catalogButtonIcon} />
				Каталог
			</Button>

			{isHovering && <CatalogMenu setIsHovering={setIsHovering} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />}
		</>
	)
}
