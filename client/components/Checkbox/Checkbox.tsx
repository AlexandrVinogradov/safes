import { Checkbox } from 'antd'
import clsx from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import { s } from './styles'

type PropsType = {
	children: ReactNode
	className?: string
	onChange: () => void
	isError: boolean
}

const CustomCheckbox = (props: PropsType & HTMLAttributes<HTMLInputElement>) => {
	const { children, className, onChange, isError } = props

	return (
		<Checkbox className={clsx(s.checkbox, isError && s.error, className)} onChange={onChange}>
			{children}
		</Checkbox>
	)
}

export default CustomCheckbox
