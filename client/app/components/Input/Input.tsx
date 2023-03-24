import clsx from 'clsx'
import { InputHTMLAttributes, LegacyRef } from 'react'
import { s } from './styles'

type PropsType = {
	type?: string
	placeholder?: string
	className?: string
	styleType?: 'primary' | 'form'
	isError?: boolean
	inputRef?: LegacyRef<HTMLInputElement>
}

export const Input = (props: PropsType & InputHTMLAttributes<HTMLInputElement>) => {
	const { type, styleType = 'primary', className, isError, inputRef, ...otherProps } = props

	return (
		<input
			className={clsx(styleType === 'primary' && s.primaryInput, styleType === 'form' && s.formInput, isError && s.error, className)}
			type={type || 'text'}
			ref={inputRef}
			{...otherProps}
		/>
	)
}
