import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function CompareIcon(props: PropsTypes) {
	const { className, width = 'w-[19px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 19 16">
			<rect width="19" height="1.94872" fill="#424242" />
			<rect y="5.94873" width="19" height="1.94872" fill="#424242" />
			<rect x="6" y="12.3594" width="13" height="1.94872" fill="#424242" />
			<rect y="12.3593" width="5" height="1.94872" fill="#424242" />
			<rect x="3.5" y="10.8975" width="4.87179" height="2" transform="rotate(90 3.5 10.8975)" fill="#424242" />
		</Icon>
	)
}
