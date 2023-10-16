import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function FilterIcon(props: PropsTypes) {
	const { className, width = 'w-[18px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 17 18">
			<g clipPath="url(#clip0_487_15227)">
				<path
					d="M16 0H1.99998C0.89998 0 0.59998 0.6 1.39998 1.4L5.59998 5.6C6.39998 6.4 6.99998 7.9 6.99998 9V14L11 12V8.5C11 7.7 11.6 6.4 12.4 5.6L16.6 1.4C17.4 0.6 17.1 0 16 0Z"
					fill="#40A3D2"
				/>
			</g>
			<defs>
				<clipPath id="clip0_487_15227">
					<rect width="18" height="14" fill="white" />
				</clipPath>
			</defs>
		</Icon>
	)
}
