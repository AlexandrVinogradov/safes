import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function LongArrowLeftIcon(props: PropsTypes) {
	const { className, width = 'w-[24px]' } = props

	return (
		<Icon className={className} width={width} fill="none" viewBox="0 0 26 17">
			<path d="M6.46154 15L8.34742e-08 8L6.46154 1" stroke="#40A3D2" strokeWidth="2" strokeLinecap="round" />
			<path d="M0 8L24 8" stroke="#40A3D2" strokeWidth="2" strokeLinecap="round" />
		</Icon>
	)
}
