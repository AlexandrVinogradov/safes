import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function FatArrowLeftIcon(props: PropsTypes) {
	const { className, width = 'w-[6px]' } = props

	return (
		<Icon className={className} width={width} fill="none" viewBox="0 0 6 16">
			<g clipPath="url(#clip0_687_7906)">
				<path d="M0.599609 15.8572L5.39961 8.00004L2.99961 4.07147L0.599609 0.142895" stroke="currentColor" strokeWidth="0.891892" />
			</g>
			<defs>
				<clipPath id="clip0_687_7906">
					<rect width="6" height="16" fill="white" transform="matrix(-1 0 0 1 6 0)" />
				</clipPath>
			</defs>
		</Icon>
	)
}
