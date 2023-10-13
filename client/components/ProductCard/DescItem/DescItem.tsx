import { s } from './styles'

export const DescItem = (props: { name: string; data: string }) => {
	const { name, data } = props

	if (!data) return null

	return (
		<li className={s.descItem}>
			<p className={s.name}>{name}</p> <p className={s.data}>{data}</p>
		</li>
	)
}
