import clsx from 'clsx'
import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
	size?: number
	fill?: string
	stroke?: string
	className?: string
}

export function Icon(props: Props): JSX.Element {
	const { children, className, size = 24, viewBox, fill = 'currentColor', stroke = 'currentColor', ...otherProps } = props

	return (
		<svg {...otherProps} fill={fill} stroke={stroke} className={clsx(`w-[${size}px]`, className)} viewBox={viewBox}>
			{children}
		</svg>
	)
}