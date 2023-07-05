import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function LongArrowRightIcon(props: PropsTypes) {
	const { className, width = 'w-[15px]' } = props

	return (
		<Icon className={className} width={width} fill="none" viewBox="0 0 18 12">
			<path d="M12.4615 10.375L16.5 6L12.4615 1.625" stroke="#40A3D2" strokeWidth="2" strokeLinecap="round" />
			<path d="M16.5 6L1.5 6" stroke="#40A3D2" strokeWidth="2" strokeLinecap="round" />
		</Icon>
	)
}
