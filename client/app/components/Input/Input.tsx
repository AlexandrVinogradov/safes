import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'
import { s } from './styles'

type PropsType = {
	type?: string
	placeholder?: string
	className?: string

	inputType?: 'primary' | 'form'
}

export const Input = (props: PropsType & InputHTMLAttributes<HTMLInputElement>) => {
	const { type, inputType = 'primary', className, ...otherProps } = props

	return (
		<input
			className={clsx(inputType === 'primary' && s.primaryInput, inputType === 'form' && s.formInput, className)}
			type={type || 'text'}
			{...otherProps}
		/>
	)
}
