import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function YouTubeIcon(props: PropsTypes) {
	const { className, width = 'w-[27px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 27 27">
			<mask id="mask0_150_1498" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="27">
				<rect x="0.312012" width="26.3119" height="26.3119" fill="url(#pattern1)" />
			</mask>
			<g mask="url(#mask0_150_1498)">
				<rect x="-10.0005" y="-3.75" width="40.3125" height="31.875" fill="#8F8F8F" />
			</g>
			<defs>
				<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlinkHref="#image0_150_1498" transform="scale(0.00195312)" />
				</pattern>
				<image
					id="image0_150_1498"
					width="512"
					height="512"
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</Icon>
	)
}
