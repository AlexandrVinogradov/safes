import { Icon } from '../components/Icon/Icon'

interface PropsTypes {
	className?: string
	width?: string
}

export function ReturnIcon(props: PropsTypes) {
	const { className, width = 'w-[24px]' } = props

	return (
		<Icon className={className} width={width} stroke="none" viewBox="0 0 24 24">
			<path
				d="M17.65 6.35C16.9099 5.60485 16.0296 5.01356 15.0599 4.61023C14.0902 4.2069 13.0502 3.99951 12 4C9.87827 4 7.84344 4.84286 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C17.2381 15.1695 16.4733 16.1824 15.4613 16.8988C14.4493 17.6153 13.2399 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"
				fill="white"
			/>
		</Icon>
	)
}
