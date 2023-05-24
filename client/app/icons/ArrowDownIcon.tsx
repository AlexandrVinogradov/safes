import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function ArrowDownIcon(props: PropsTypes) {
	const { className, width = 'w-[10px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 11 9">
			<path d="M0.239136 0H10.7609L5.5 9" fill="white" />
		</Icon>
	)
}
