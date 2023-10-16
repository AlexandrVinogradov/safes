import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function CrossIcon(props: PropsTypes) {
	const { className, width = 'w-[15px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 15 15">
			<g clipPath="url(#clip0_501_17813)">
				<rect x="1.375" width="19" height="1.94872" transform="rotate(45 1.375 0)" fill="currentColor" />
				<rect width="19" height="1.94872" transform="matrix(-0.707107 0.707107 0.707107 0.707107 13.4375 0)" fill="currentColor" />
			</g>
			<defs>
				<clipPath id="clip0_501_17813">
					<rect width="15" height="15" fill="white" />
				</clipPath>
			</defs>
		</Icon>
	)
}
