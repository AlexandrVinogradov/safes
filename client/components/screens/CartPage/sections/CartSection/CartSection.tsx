import Link from 'next/link'
import { container } from '@/styles/container'
import { CrossIcon } from '@/icons/CrossIcon'
import { useBasketStore } from '@/store/useBasketStore'
import { BasketItem } from './BasketItem/BasketItem'
import { BasketSummary } from './BasketSummary/BasketSummary'
import { LongArrowLeftIcon } from '@/icons/LongArrowLeftIcon'
import clsx from 'clsx'
import { s } from './styles'

export const CartSection = () => {
	const basketItems = useBasketStore((state) => state.basketItems)
	const deleteAllItems = useBasketStore((state) => state.deleteAllItems)

	const handleClickDeleteAll = () => deleteAllItems()

	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>Корзина</h1>
			<button onClick={handleClickDeleteAll} className={s.deleteAllButton}>
				<CrossIcon width="w-[14px]" />
				Удалить все
			</button>

			<div className={s.mainContent}>
				<div className={s.basketItems}>
					<header className={s.header}>
						<p className={s.product}>Товар</p>
						<p className={s.empty} />
						<p className={s.price}>Цена</p>
						<p className={s.count}>Кол-во</p>
					</header>
					<ul className={s.basketItemsList}>
						{basketItems.map((item) => (
							<BasketItem item={item} />
						))}
					</ul>
				</div>

				<BasketSummary />
			</div>

			<Link href="/catalog" className={s.returnButton}>
				<LongArrowLeftIcon />
				Вернуться в каталог
			</Link>
		</section>
	)
}
