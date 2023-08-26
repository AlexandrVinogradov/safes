import React from 'react'
import { s } from './styles'

type PropsType = {
	value: string
	highlight: string
}

export const HighlightText = (props: PropsType) => {
	const { value, highlight } = props

	const parts = value.split(new RegExp(`(${highlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi'))

	return (
		<>
			{parts.map((part, index) => (
				<React.Fragment key={index}>
					{part.toLowerCase() === highlight.toLowerCase() ? <span className={s.highlight}>{part}</span> : part}
				</React.Fragment>
			))}
		</>
	)
}
