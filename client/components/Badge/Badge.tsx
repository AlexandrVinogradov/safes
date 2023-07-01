import Badge from 'antd/es/badge'
import { ReactNode } from 'react'

export type CustomBadgePropsType = {
	children: ReactNode
	count: number
	offset?: [string | number, string | number]
}
const CustomBadge = (props: CustomBadgePropsType) => {
	const { children } = props

	return (
		<Badge color="#40A3D2" {...props}>
			{children}
		</Badge>
	)
}

export default CustomBadge
