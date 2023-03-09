import { Icon } from '../components/Icon/Icon'

interface IconPropsTypes {
	className?: string
	size?: number
}

export function ArrowRightIcon(props: IconPropsTypes) {
	const { className, size } = props

	return (
		<Icon className={className} size={size} fill="none" viewBox="0 0 27 16">
			<path d="M18.5385 1L25 8L18.5385 15" stroke-width="2" stroke-linecap="round" />
			<path d="M25 8L1 8" stroke-width="2" stroke-linecap="round" />
		</Icon>
	)
}

ArrowRightIcon.defaultProps = {
	styles: undefined,
	size: 20,
}
