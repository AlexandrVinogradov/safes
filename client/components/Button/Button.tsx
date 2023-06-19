import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { s } from './styles'

type PropsTypes = {
	children: ReactNode
	className?: string
	styleType?: 'outlined' | 'filled'
	onClick?: () => void
	href?: string
	type?: string
}

export const Button = (props: PropsTypes & HTMLAttributes<HTMLButtonElement>) => {
	const { children, className, styleType = 'outlined', href, ...otherProps } = props

	// FIXME:
	const CustomTag: keyof JSX.IntrinsicElements | any = href ? Link : 'button'

	return (
		<CustomTag
			//
			className={clsx(s.button, styleType === 'filled' && s.filled, styleType === 'outlined' && s.outlined, className)}
			href={href}
			{...otherProps}
		>
			{children}
		</CustomTag>
	)
}
