import clsx from 'clsx'
import { s } from './styles'
import { useRouter } from 'next/router'
import { useQueryParams } from '@/hooks/useQueryParams'
import { ArrowDownIcon } from '@/icons/ArrowDownIcon'

type PropsType = {
	data: { name: string; value: string }[]
	className?: string
}

const Sort = (props: PropsType) => {
	const { data, className } = props

	const { query } = useRouter()
	const { setQueryParams } = useQueryParams()
	const querySort = (query.sort as string) || `${data[0].value}*ASC`

	const handleClickItem = (value: string, order: string) => {
		if (order === 'DESC') {
			setQueryParams({ sort: `${value}*ASC` })
		} else {
			setQueryParams({ sort: `${value}*DESC` })
		}
	}

	return (
		<ul className={clsx(s.sort, className)}>
			{data.map((el) => {
				const paramArr = querySort.split('*')
				const value = paramArr[0]
				const order = paramArr[1]

				const isActive = el.value === value

				return (
					<li key={el.value} className={clsx(s.item, isActive && s.active)}>
						<button onClick={() => handleClickItem(el.value, order)}>{el.name}</button>
						<span className={s.arrowWrapper}>
							{isActive && <ArrowDownIcon className={clsx(s.arrow, order === 'ASC' && s.reverseArrow)} />}
						</span>
					</li>
				)
			})}
		</ul>
	)
}

export default Sort
