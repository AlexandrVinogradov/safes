import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { s } from './styles'

type PropsType = {
	children: ReactNode
	className?: string
}

const CustomCheckbox = (props: PropsType) => {
	const { children, className } = props

	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`)
	}

	return (
		<Checkbox className={clsx(s.checkbox, className)} onChange={onChange}>
			{children}
		</Checkbox>
	)
}

export default CustomCheckbox
