import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function ArrowLeftIcon(props: PropsTypes) {
	const { className, width = 'w-[24px]' } = props

	return (
		<Icon className={className} width={width} fill="none" viewBox="0 0 27 16">
			<path d="M8.46154 1L2 8L8.46154 15" strokeWidth="2" strokeLinecap="round" />
			<path d="M2 8L26 8" strokeWidth="2" strokeLinecap="round" />
		</Icon>
	)
}
