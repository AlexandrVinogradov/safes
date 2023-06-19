import Link from 'next/link'
import { s } from './styles'

type PropsType = {
	list: {
		title: string
		items: string[]
	}
}

export const MenuCategoryList = (props: PropsType) => {
	const { list } = props
	return (
		<div className={s.listWrapper}>
			<h4 className={s.title}>{list.title}</h4>
			<ul className={s.list}>
				{list.items.map((item) => (
					<Link href="/" className={s.link}>
						<li className={s.item}>{item}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}
