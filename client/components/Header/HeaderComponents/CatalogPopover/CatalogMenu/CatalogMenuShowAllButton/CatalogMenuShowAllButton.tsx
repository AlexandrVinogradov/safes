import { useModalStore } from '@/store/useModalStore'
import Link from 'next/link'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	href: string
	title: string
	handleOnMouseOverAll?: () => void
	setIsHovering?: (isHovering: boolean) => void
	className?: string
}

export const CatalogMenuShowAllButton = (props: PropsType) => {
	const { title, href, handleOnMouseOverAll, setIsHovering, className } = props

	const setIsMobileMenuModal = useModalStore((state) => state.setIsMobileMenuModal)

	const handleClickShowAll = () => {
		setIsHovering && setIsHovering(false)
		setIsMobileMenuModal(false)
	}

	return (
		<Link className={clsx(s.link, className)} href={href} onMouseOver={handleOnMouseOverAll} onClick={handleClickShowAll}>
			<span className={s.dot} />
			{title}
		</Link>
	)
}
