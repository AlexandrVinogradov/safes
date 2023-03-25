import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function CrossIcon(props: PropsTypes) {
	const { className, width = 'w-[15px]' } = props

	return (
		<Icon className={className} width={width} fill="none" viewBox="0 0 17 18">
			<path
				d="M8.5 9L1 1.5M8.5 9L16 16.5M8.5 9L16 1.5M8.5 9L1 16.5"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Icon>
	)
}
