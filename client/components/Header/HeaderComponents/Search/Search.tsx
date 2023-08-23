import { Input } from '@/components/Input/Input'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	className?: string
}

export const Search = (props: PropsType) => {
	const { className } = props

	return (
		<div className={clsx(s.search, className)}>
			<Input className={s.searchInput} placeholder="Введите текст поиска..." />
			<button className={s.searchButton}>Поиск</button>
		</div>
	)
}
