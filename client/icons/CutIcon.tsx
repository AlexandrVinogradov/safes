import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function CutIcon(props: PropsTypes) {
	const { className, width = 'w-[119px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 119 119">
			<mask id="mask0_482_12044" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="119" height="119">
				<rect width="119" height="119" fill="url(#pattern4)" />
			</mask>
			<g mask="url(#mask0_482_12044)">
				<rect width="119" height="119" fill="#EB5757" />
			</g>
			<defs>
				<pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlinkHref="#image0_482_12044" transform="scale(0.00195312)" />
				</pattern>
				<image
					id="image0_482_12044"
					width="512"
					height="512"
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</Icon>
	)
}