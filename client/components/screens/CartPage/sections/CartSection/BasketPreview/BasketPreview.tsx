import { useBasketStore } from '@/store/useBasketStore'
import { BasketItem } from './BasketItem/BasketItem'
import { BasketSummary } from './BasketSummary/BasketSummary'
import { usePersistStore } from '@/hooks/usePersistStore'
import { s } from './styles'
import clsx from 'clsx'
import { BasketDeleteAllButton } from './BasketDeleteAllButton/BasketDeleteAllButton'

type PropsType = {
	isEditMode?: boolean
	className?: string
}

export const BasketPreview = (props: PropsType) => {
	const { isEditMode = true, className = true } = props
	const basketStore = usePersistStore(useBasketStore, (state) => state)
	const basketItems = basketStore?.basketItems

	return (
		<div className={clsx(s.mainContent, className)}>
			<div className={s.basketItems}>
				<header className={s.header}>
					<div className={s.wrapper}>
						<p className={s.product}>Товар</p>
						<p className={s.empty} />
						<p className={s.price}>Цена</p>
						<p className={s.count}>Кол-во</p>
					</div>
					<div className={s.emptyLast} />
				</header>
				<ul className={s.basketItemsList}>
					{basketItems?.map((item) => (
						<BasketItem key={item.id} isEditMode={isEditMode} item={item} />
					))}
				</ul>
			</div>

			{isEditMode && <BasketDeleteAllButton className={s.deleteAllButton} />}

			<BasketSummary isEditMode={isEditMode} className={s.basketSummary} />
		</div>
	)
}
