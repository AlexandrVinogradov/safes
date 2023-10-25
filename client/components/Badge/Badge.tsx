import Badge from 'antd/es/badge'
import { ReactNode } from 'react'
import { s } from './styles'
import clsx from 'clsx'

export type CustomBadgePropsType = {
	children: ReactNode
	count: number
	offset?: [string | number, string | number]
	className?: string
}
const CustomBadge = (props: CustomBadgePropsType) => {
	const { children, className } = props

	return (
		<Badge color="#40A3D2" {...props} className={clsx(s.badge, className)}>
			{children}
		</Badge>
	)
}

export default CustomBadge
