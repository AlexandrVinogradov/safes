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
	label?: string
	isRequired?: boolean
}

export const Input = (props: PropsType & InputHTMLAttributes<HTMLInputElement>) => {
	const { type, styleType = 'primary', className, isError, inputRef, label, isRequired, ...otherProps } = props

	return (
		<label className={s.label}>
			{label && (
				<span className={s.InputName}>
					{label} {isRequired && <span className={s.required}>*</span>}
				</span>
			)}

			<input
				className={clsx(
					styleType === 'primary' && s.primaryInput,
					styleType === 'form' && s.formInput,
					isError && s.error,
					className,
				)}
				type={type || 'text'}
				ref={inputRef}
				{...otherProps}
			/>
		</label>
	)
}
