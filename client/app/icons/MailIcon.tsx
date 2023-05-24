import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function MailIcon(props: PropsTypes) {
	const { className, width = 'w-[27px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 27 20">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M26.8836 19.6429V1.96429C26.8831 1.44348 26.6806 0.944163 26.3206 0.5759C25.9606 0.207638 25.4725 0.000520022 24.9634 0H1.92026C1.41147 -5.85506e-07 0.923484 0.206546 0.563448 0.574284C0.203412 0.942022 0.000763178 1.44089 0 1.96134V17.6786C0.000761862 18.1993 1.96345e-05 19.6429 1.96345e-05 19.6429C1.96345e-05 19.6429 1.41121 19.6421 1.92026 19.6429H26.8836ZM1.91738 2.85411L1.92026 17.6786H24.9634V2.85804L13.9881 10.6287C13.8276 10.7424 13.637 10.8032 13.4418 10.8032C13.2466 10.8032 13.056 10.7424 12.8955 10.6287L1.91738 2.85411ZM13.4418 8.62714L22.8501 1.96429H4.0335L13.4418 8.62714Z"
				fill="#40A3D2"
			/>
		</Icon>
	)
}