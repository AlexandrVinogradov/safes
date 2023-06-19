import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function BigArrowRightIcon(props: PropsTypes) {
	const { className, width = 'w-[20px]' } = props

	return (
		<Icon className={className} width={width} fill="none" viewBox="0 0 20 74">
			<path d="M2 73.3394L18 37.0001L10 18.8304L2 0.660779" strokeWidth="3" />
		</Icon>
	)
}
