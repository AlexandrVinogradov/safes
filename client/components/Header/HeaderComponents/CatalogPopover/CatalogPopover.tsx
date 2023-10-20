import { Button } from '@/components/Button/Button'
import { CatalogMenuIcon } from '@/icons/CatalogMenuIcon'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { CatalogMenu } from './CatalogMenu/CatalogMenu'
import { s } from './styles'
import { scrollToggle } from '@/helpers/scrollToggle'

type PropsType = {
	className?: string
}

export const CatalogPopover = (props: PropsType) => {
	const { className } = props

	const [isHovering, setIsHovering] = useState(false)

	const handleMouseOver = () => setIsHovering(true)
	const handleMouseOut = () => setIsHovering(false)

	useEffect(() => {
		scrollToggle(isHovering)
	}, [isHovering])

	return (
		<>
			<Button
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				styleType="filled"
				className={clsx(isHovering && s.hoveredCatalogButton, s.catalogButton, className)}
			>
				<CatalogMenuIcon className={s.catalogButtonIcon} />
				<span>Каталог</span>
			</Button>

			{isHovering && <CatalogMenu setIsHovering={setIsHovering} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />}
		</>
	)
}
