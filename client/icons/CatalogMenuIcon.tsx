import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function CatalogMenuIcon(props: PropsTypes) {
	const { className, width = 'w-[15px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 17 18">
			<path d="M0.5 0H18.5V2H0.5V0ZM0.5 7H12.5V9H0.5V7ZM0.5 14H18.5V16H0.5V14Z" fill="white" />
		</Icon>
	)
}
