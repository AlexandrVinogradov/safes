import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function BigArrowLeftIcon(props: PropsTypes) {
	const { className, width = 'w-[20px]' } = props

	return (
		<Icon className={className} width={width} fill="none" viewBox="0 0 20 74">
			<path d="M18 73.3394L2 37.0001L10 18.8304L18 0.660779" strokeWidth="3" />
		</Icon>
	)
}
