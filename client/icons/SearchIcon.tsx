import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function SearchIcon(props: PropsTypes) {
	const { className, width = 'w-[26px]' } = props

	return (
		<Icon className={className} width={width} fill="none" viewBox="0 0 26 26">
			<circle cx="15.8984" cy="9.18037" r="6.14193" transform="rotate(45 15.8984 9.18037)" stroke="#40A3D2" strokeWidth="1.40625" />
			<path d="M11.0586 14.0208L5.18267 19.8967" stroke="#40A3D2" strokeWidth="1.40625" strokeLinecap="round" />
		</Icon>
	)
}
