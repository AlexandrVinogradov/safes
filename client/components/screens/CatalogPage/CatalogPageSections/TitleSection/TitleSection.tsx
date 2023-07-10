import clsx from 'clsx'
import { s } from './styles'
import { container } from '@/styles/container'

type PropsType = {
	title: string
	total: number
}

export const TitleSection = (props: PropsType) => {
	const { title, total } = props

	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>{title}</h1>
			<p className={s.total}>
				Всего товаров:
				<span className={s.totalCount}>{total}</span>
			</p>
		</section>
	)
}
