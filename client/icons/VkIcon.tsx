import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function VkIcon(props: PropsTypes) {
	const { className, width = 'w-[27px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 27 27">
			<mask id="mask0_150_1495" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="27">
				<rect width="26.3119" height="26.3119" fill="url(#pattern0)" />
			</mask>
			<g mask="url(#mask0_150_1495)">
				<rect x="-9.375" y="-3.75" width="40.3125" height="31.875" fill="currentColor" />
			</g>
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlinkHref="#image0_150_1495" transform="scale(0.00195312)" />
				</pattern>
				<image
					id="image0_150_1495"
					width="512"
					height="512"
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</Icon>
	)
}
