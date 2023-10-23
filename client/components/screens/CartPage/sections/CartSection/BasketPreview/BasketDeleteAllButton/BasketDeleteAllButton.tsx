import { useBasketStore } from '@/store/useBasketStore'
import { CrossIcon } from '@/icons/CrossIcon'
import clsx from 'clsx'
import { s } from './styles'

type PropsType = {
	className?: string
}

export const BasketDeleteAllButton = (props: PropsType) => {
	const { className } = props
	const deleteAllItems = useBasketStore((state) => state.deleteAllItems)

	const handleClickDeleteAll = () => deleteAllItems()

	return (
		<button onClick={handleClickDeleteAll} className={clsx(s.deleteAllButton, className)}>
			<CrossIcon width="w-[14px]" />
			Удалить все
		</button>
	)
}
