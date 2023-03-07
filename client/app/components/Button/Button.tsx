import { ReactNode } from 'react'
import clsx from 'clsx'
import { s } from './styles'

type PropsTypes = {
	children: ReactNode
	className?: string
	type?: 'outlined' | 'filled'
}

export const Button = (props: PropsTypes) => {
	const { children, className, type = 'outlined' } = props

	return (
		<button className={clsx(s.button, type === 'filled' && s.filled, type === 'outlined' && s.outlined, className)}>{children}</button>
	)
}
