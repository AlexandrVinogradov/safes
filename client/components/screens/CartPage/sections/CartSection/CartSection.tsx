import Link from 'next/link'
import { container } from '@/styles/container'
import { CrossIcon } from '@/icons/CrossIcon'
import { useBasketStore } from '@/store/useBasketStore'
import { LongArrowLeftIcon } from '@/icons/LongArrowLeftIcon'
import clsx from 'clsx'
import { s } from './styles'
import { BasketPreview } from './BasketPreview/BasketPreview'

export const CartSection = () => {
	const deleteAllItems = useBasketStore((state) => state.deleteAllItems)

	const handleClickDeleteAll = () => deleteAllItems()

	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>Корзина</h1>
			<button onClick={handleClickDeleteAll} className={s.deleteAllButton}>
				<CrossIcon width="w-[14px]" />
				Удалить все
			</button>

			<BasketPreview  className={s.basketPreview}/>

			<Link href="/catalog" className={s.returnButton}>
				<LongArrowLeftIcon />
				Вернуться в каталог
			</Link>
		</section>
	)
}
