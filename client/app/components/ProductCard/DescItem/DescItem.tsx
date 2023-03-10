import { s } from './styles'

export const DescItem = (props: { name: string; data: string }) => {
	const { name, data } = props

	return (
		<li className={s.descItem}>
			<p className={s.name}>{name}</p> <p>{data}</p>
		</li>
	)
}
