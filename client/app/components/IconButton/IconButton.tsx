type PropsType = {
	icon: JSX.Element
	className: string
}
export const IconButton = (props: PropsType) => {
	const { icon, ...otherProps } = props

	return <button {...otherProps}>{icon}</button>
}
