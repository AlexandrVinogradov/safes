import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function ArrowRightIcon(props: PropsTypes) {
	const { className, width = 'w-[24px]' } = props

	return (
		<Icon className={className} width={width} fill="none" viewBox="0 0 27 16">
			<path d="M18.5385 1L25 8L18.5385 15" strokeWidth="2" strokeLinecap="round" />
			<path d="M25 8L1 8" strokeWidth="2" strokeLinecap="round" />
		</Icon>
	)
}
