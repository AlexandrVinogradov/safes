import { Checkbox } from 'antd'
import clsx from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import { s } from './styles'

type PropsType = {
	children: ReactNode
	className?: string
	onChange: () => void
	value: boolean
	isError: boolean
}

const CustomCheckbox = (props: PropsType & HTMLAttributes<HTMLInputElement>) => {
	const { children, className, isError, value, ...otherProps } = props

	return (
		<Checkbox className={clsx(s.checkbox, isError && s.error, className)} checked={value} {...otherProps}>
			{children}
		</Checkbox>
	)
}

export default CustomCheckbox
