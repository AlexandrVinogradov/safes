import { ButtonHTMLAttributes } from 'react'

type PropsType = {
	icon: JSX.Element
	className?: string
}

export const IconButton = (props: PropsType & ButtonHTMLAttributes<HTMLButtonElement>) => {
	const { icon, ...otherProps } = props

	return (
		<button type="button" {...otherProps}>
			{icon}
		</button>
	)
}
