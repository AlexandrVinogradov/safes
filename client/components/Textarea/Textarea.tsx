import clsx from 'clsx'
import { LegacyRef, TextareaHTMLAttributes } from 'react'
import { s } from './styles'

type PropsType = {
	type?: string
	placeholder?: string
	className?: string
	isError?: boolean
	inputRef?: LegacyRef<HTMLTextAreaElement>
	label?: string
	isRequired?: boolean
}

export const Textarea = (props: PropsType & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	const { type, className, isError, inputRef, label, isRequired, ...otherProps } = props

	return (
		<label className={s.label}>
			{label && (
				<p className={s.textareaName}>
					{label} {isRequired && <span className={s.required}>*</span>}
				</p>
			)}

			<textarea className={clsx(s.textarea, isError && s.error, className)} ref={inputRef} {...otherProps} />
		</label>
	)
}
