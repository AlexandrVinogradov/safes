import Link from 'next/link'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	href: string
	title: string
	handleOnMouseOverAll?: () => void
	setIsHovering: (isHovering: boolean) => void
	className?: string
}

export const CatalogMenuShowAllButton = (props: PropsType) => {
	const { title, href, handleOnMouseOverAll, setIsHovering, className } = props

	return (
		<Link className={clsx(s.link, className)} href={href} onMouseOver={handleOnMouseOverAll} onClick={() => setIsHovering(false)}>
			<span className={s.dot} />
			{title}
		</Link>
	)
}
