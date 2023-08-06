import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function PdfIcon(props: PropsTypes) {
	const { className, width = 'w-[46px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 46 60">
			<path
				d="M5.74997 0H30.1773L43.1249 16.8226V56.25C43.1249 58.3218 41.837 60 40.2499 60H5.74997C4.16293 60 2.875 58.3218 2.875 56.25V3.74996C2.875 1.67816 4.16308 0 5.74997 0Z"
				fill="#959595"
			/>
			<path
				d="M5.74997 0H30.1773L43.1249 16.8226V56.25C43.1249 58.3218 41.837 60 40.2499 60H5.74997C4.16293 60 2.875 58.3218 2.875 56.25V3.74996C2.875 1.67816 4.16308 0 5.74997 0Z"
				fill="#E2574C"
			/>
			<path d="M43.0833 16.8748H33.0625C31.4754 16.8748 30.1875 15.1949 30.1875 13.1249V0.0373535L43.0833 16.8748Z" fill="#31313B" />
			<path d="M43.0833 16.8748H33.0625C31.4754 16.8748 30.1875 15.1949 30.1875 13.1249V0.0373535L43.0833 16.8748Z" fill="#B0443B" />
			<path
				d="M18.9329 29.78C19.1409 30.204 19.2449 30.676 19.2449 31.196C19.2449 31.716 19.1409 32.188 18.9329 32.612C18.7249 33.028 18.4569 33.36 18.1289 33.608C17.4649 34.12 16.7769 34.376 16.0649 34.376H14.5649V35.732C14.5649 35.916 14.5569 36.056 14.5409 36.152C14.5329 36.24 14.4969 36.344 14.4329 36.464C14.3209 36.68 14.0089 36.788 13.4969 36.788C12.9369 36.788 12.6089 36.64 12.5129 36.344C12.4649 36.208 12.4409 36 12.4409 35.72V29.06C12.4409 28.876 12.4449 28.74 12.4529 28.652C12.4689 28.556 12.5089 28.448 12.5729 28.328C12.6849 28.112 12.9969 28.004 13.5089 28.004H16.0769C16.7809 28.004 17.4649 28.26 18.1289 28.772C18.4569 29.02 18.7249 29.356 18.9329 29.78ZM16.0769 32.252C16.3169 32.252 16.5529 32.164 16.7849 31.988C17.0169 31.812 17.1329 31.548 17.1329 31.196C17.1329 30.844 17.0169 30.58 16.7849 30.404C16.5529 30.22 16.3129 30.128 16.0649 30.128H14.5649V32.252H16.0769ZM21.091 27.992L23.311 28.004C24.471 28.004 25.491 28.424 26.371 29.264C27.251 30.096 27.691 31.124 27.691 32.348C27.691 33.564 27.259 34.608 26.395 35.48C25.539 36.352 24.499 36.788 23.275 36.788H21.079C20.591 36.788 20.287 36.688 20.167 36.488C20.071 36.32 20.023 36.064 20.023 35.72V29.048C20.023 28.856 20.027 28.716 20.035 28.628C20.051 28.54 20.091 28.436 20.155 28.316C20.267 28.1 20.579 27.992 21.091 27.992ZM23.311 34.664C23.887 34.664 24.407 34.452 24.871 34.028C25.335 33.596 25.567 33.056 25.567 32.408C25.567 31.76 25.339 31.22 24.883 30.788C24.435 30.348 23.907 30.128 23.299 30.128H22.147V34.664H23.311ZM34.2922 28.004C34.4762 28.004 34.6122 28.012 34.7002 28.028C34.7962 28.036 34.9002 28.072 35.0122 28.136C35.1322 28.2 35.2162 28.308 35.2642 28.46C35.3122 28.612 35.3362 28.816 35.3362 29.072C35.3362 29.328 35.3122 29.532 35.2642 29.684C35.2162 29.836 35.1322 29.944 35.0122 30.008C34.8922 30.064 34.7842 30.1 34.6882 30.116C34.6002 30.124 34.4602 30.128 34.2682 30.128H30.5962V31.34H32.9602C33.1522 31.34 33.2922 31.348 33.3802 31.364C33.4762 31.372 33.5842 31.408 33.7042 31.472C33.9122 31.592 34.0162 31.908 34.0162 32.42C34.0162 32.98 33.8642 33.312 33.5602 33.416C33.4322 33.456 33.2282 33.476 32.9482 33.476H30.5962V35.744C30.5962 35.936 30.5882 36.076 30.5722 36.164C30.5642 36.252 30.5282 36.356 30.4642 36.476C30.3522 36.692 30.0402 36.8 29.5282 36.8C28.9682 36.8 28.6402 36.648 28.5442 36.344C28.4962 36.216 28.4722 36.012 28.4722 35.732V29.06C28.4722 28.652 28.5482 28.376 28.7002 28.232C28.8522 28.08 29.1402 28.004 29.5642 28.004H34.2922Z"
				fill="white"
			/>
		</Icon>
	)
}