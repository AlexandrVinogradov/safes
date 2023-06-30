import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function AttentionIcon(props: PropsTypes) {
	const { className, width = 'w-[20px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 22 22">
			<mask id="mask0_276_8082" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
				<path
					d="M11 21C12.3135 21.0017 13.6143 20.7438 14.8278 20.2412C16.0413 19.7385 17.1435 19.001 18.071 18.071C19.001 17.1435 19.7385 16.0413 20.2412 14.8278C20.7438 13.6143 21.0017 12.3135 21 11C21.0017 9.68655 20.7438 8.3857 20.2411 7.17222C19.7385 5.95875 19.001 4.85656 18.071 3.92901C17.1435 2.99902 16.0413 2.26151 14.8278 1.75885C13.6143 1.25619 12.3135 0.998307 11 1.00001C9.68655 0.998334 8.3857 1.25623 7.17222 1.75889C5.95875 2.26154 4.85656 2.99904 3.92901 3.92901C2.99904 4.85656 2.26154 5.95875 1.75889 7.17222C1.25623 8.3857 0.998334 9.68655 1.00001 11C0.998307 12.3135 1.25619 13.6143 1.75885 14.8278C2.26151 16.0413 2.99902 17.1435 3.92901 18.071C4.85656 19.001 5.95875 19.7385 7.17222 20.2411C8.3857 20.7438 9.68655 21.0017 11 21Z"
					fill="white"
					stroke="white"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11 17.5C11.3315 17.5 11.6495 17.3683 11.8839 17.1339C12.1183 16.8995 12.25 16.5815 12.25 16.25C12.25 15.9185 12.1183 15.6005 11.8839 15.3661C11.6495 15.1317 11.3315 15 11 15C10.6685 15 10.3505 15.1317 10.1161 15.3661C9.8817 15.6005 9.75 15.9185 9.75 16.25C9.75 16.5815 9.8817 16.8995 10.1161 17.1339C10.3505 17.3683 10.6685 17.5 11 17.5Z"
					fill="black"
				/>
				<path d="M11 5V13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</mask>
			<g mask="url(#mask0_276_8082)">
				<path d="M-1 -1H23V23H-1V-1Z" fill="#40A3D2" />
			</g>
		</Icon>
	)
}
