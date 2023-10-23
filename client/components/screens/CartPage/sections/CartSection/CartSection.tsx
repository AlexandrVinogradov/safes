import Link from 'next/link'
import { container } from '@/styles/container'

import { LongArrowLeftIcon } from '@/icons/LongArrowLeftIcon'
import clsx from 'clsx'
import { s } from './styles'
import { BasketPreview } from './BasketPreview/BasketPreview'
import { BasketDeleteAllButton } from './BasketPreview/BasketDeleteAllButton/BasketDeleteAllButton'

export const CartSection = () => {


	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>Корзина</h1>


			<BasketDeleteAllButton className={s.deleteAllButton} />

			<BasketPreview className={s.basketPreview} />

			<Link href="/catalog" className={s.returnButton}>
				<LongArrowLeftIcon />
				Вернуться в каталог
			</Link>
		</section>
	)
}
