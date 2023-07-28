import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function ViberIcon(props: PropsTypes) {
	const { className, width = 'w-[43px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 42 41">
			<g clipPath="url(#clip0_482_12020)">
				<path
					d="M21 0C10.6312 0 0 2.17812 0 17.9375C0 26.3937 3.01875 31.6469 9.1875 34.0812V38.8219C9.1875 39.7188 9.7125 40.4875 10.5 40.8719C10.7625 41 11.1562 41 11.4187 41C11.9437 41 12.6 40.7438 12.9937 40.3594L17.7188 35.7469C18.7687 35.7469 19.8188 35.875 21 35.875C31.3687 35.875 42 33.6969 42 17.9375C42 2.17812 31.3687 0 21 0Z"
					fill="#7B519C"
				/>
				<path
					d="M20.3438 11.6594C23.4938 11.6594 26.1187 14.2219 26.1187 17.2969C26.1187 18.0657 26.6437 18.5782 27.4312 18.5782C28.2188 18.5782 28.7437 18.0657 28.7437 17.2969C28.7437 12.8125 24.9375 9.09692 20.3438 9.09692C19.5562 9.09692 19.0312 9.60942 19.0312 10.3782C19.0312 11.1469 19.5562 11.6594 20.3438 11.6594Z"
					fill="white"
				/>
				<path
					d="M20.3438 15.6313C21.2625 15.6313 22.05 16.4001 22.05 17.297C22.05 18.0657 22.575 18.5782 23.3625 18.5782C24.15 18.5782 24.675 18.0657 24.675 17.297C24.675 14.9907 22.7062 13.0688 20.3438 13.0688C19.5562 13.0688 19.0312 13.5813 19.0312 14.3501C19.0312 15.1188 19.5562 15.6313 20.3438 15.6313Z"
					fill="white"
				/>
				<path
					d="M20.3438 5.125C19.5562 5.125 19.0312 5.6375 19.0312 6.40625C19.0312 7.175 19.5562 7.6875 20.3438 7.6875C25.725 7.6875 30.1875 12.0438 30.1875 17.2969C30.1875 18.0656 30.7125 18.5781 31.5 18.5781C32.2875 18.5781 32.8125 18.0656 32.8125 17.2969C32.8125 10.6344 27.1687 5.125 20.3438 5.125Z"
					fill="white"
				/>
				<path
					d="M28.7437 21.9094L28.4813 21.7812C28.4813 21.7812 25.5938 20.3719 25.0688 20.2438C24.0188 19.8594 22.9688 20.1156 22.3125 21.0125L22.1812 21.2688C21.9187 21.6531 21.525 22.1656 21.2625 22.4219C20.6063 22.1656 19.425 21.6531 17.85 20.3719C16.8 19.475 16.0125 18.3219 15.6187 17.6813C15.75 17.5531 15.75 17.5531 15.8813 17.425C16.0125 17.2969 16.1437 17.1687 16.275 17.0406C16.5375 16.7844 16.6687 16.5281 16.9312 16.1438C17.1937 15.5031 17.1937 14.8625 16.9312 14.0938C16.8 13.8375 16.275 12.6844 15.8813 11.7875L15.3562 10.7625C14.8312 9.48125 14.0437 9.225 13.125 9.225C12.9938 8.96875 12.8625 8.96875 12.6 8.96875C11.55 8.96875 10.6312 9.35313 9.975 9.99375C9.31875 10.6344 7.875 12.0438 7.875 14.8625C7.875 17.1688 9.31875 19.3469 10.1062 20.5L10.2375 20.6281C12.7313 24.2156 15.8812 26.7781 19.0312 28.0594C21.7875 29.2125 23.3625 29.4688 24.4125 29.4688C24.9375 29.4688 25.3312 29.4688 25.5938 29.3406C27.3 28.9562 29.2688 27.8031 29.7938 26.2656C30.0563 25.3687 30.45 23.8312 29.925 22.9344C29.6625 22.4219 29.1375 22.1656 28.7437 21.9094Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_482_12020">
					<rect width="42" height="41" fill="white" />
				</clipPath>
			</defs>
		</Icon>
	)
}
