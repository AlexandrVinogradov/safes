import { ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { s } from './styles'

type PropsTypes = {
	children: ReactNode
	className?: string
	type?: 'outlined' | 'filled'
	href?: string
}

export const Button = (props: PropsTypes) => {
	const { children, className, type = 'outlined', href } = props

	// FIXME:
	const CustomTag: keyof JSX.IntrinsicElements | any = href ? Link : 'button'

	return (
		<CustomTag
			//
			className={clsx(s.button, type === 'filled' && s.filled, type === 'outlined' && s.outlined, className)}
			href={href}
		>
			{children}
		</CustomTag>
	)
}
