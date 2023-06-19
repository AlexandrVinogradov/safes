import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function CloseIcon(props: PropsTypes) {
	const { className, width = 'w-[50px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 50 50">
			<g clipPath="url(#clip0_117_1572)">
				<path
					d="M25 0C11.0714 0 0 11.0714 0 25C0 38.9286 11.0714 50 25 50C38.9286 50 50 38.9286 50 25C50 11.0714 38.9286 0 25 0ZM25 46.4286C13.2143 46.4286 3.57143 36.7857 3.57143 25C3.57143 13.2143 13.2143 3.57143 25 3.57143C36.7857 3.57143 46.4286 13.2143 46.4286 25C46.4286 36.7857 36.7857 46.4286 25 46.4286Z"
					fill="#477D9D"
				/>
				<path
					d="M34.6429 37.5L25 27.8571L15.3571 37.5L12.5 34.6429L22.1429 25L12.5 15.3571L15.3571 12.5L25 22.1429L34.6429 12.5L37.5 15.3571L27.8571 25L37.5 34.6429L34.6429 37.5Z"
					fill="#477D9D"
				/>
			</g>
			<defs>
				<clipPath id="clip0_117_1572">
					<rect width="50" height="50" fill="white" />
				</clipPath>
			</defs>
		</Icon>
	)
}
