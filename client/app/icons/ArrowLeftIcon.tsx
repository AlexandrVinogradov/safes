import { Icon } from '../components/Icon/Icon'

interface IconPropsTypes {
	className?: string
	size?: number
}

export function ArrowLeftIcon(props: IconPropsTypes) {
	const { className, size } = props

	return (
		<Icon className={className} size={size} fill="none" viewBox="0 0 27 16">
			<path d="M8.46154 1L2 8L8.46154 15" stroke-width="2" stroke-linecap="round" />
			<path d="M2 8L26 8" stroke-width="2" stroke-linecap="round" />
		</Icon>
	)
}

ArrowLeftIcon.defaultProps = {
	styles: undefined,
	size: 20,
}
