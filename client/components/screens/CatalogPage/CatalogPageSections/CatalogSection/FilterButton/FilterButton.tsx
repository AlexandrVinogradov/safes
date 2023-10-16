import { FilterIcon } from '@/icons/FilterIcon'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	className?: string
}

export const FilterButton = (props: PropsType) => {
	const { className } = props

	return (
		<button className={clsx(s.button, className)}>
			<FilterIcon />
			Фильтры
		</button>
	)
}
