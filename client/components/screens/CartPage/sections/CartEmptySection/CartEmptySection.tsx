import { CatalogRedirectMessage } from '@/components/CatalogRedirectMessage/CatalogRedirectMessage'
import { container } from '@/styles/container'
import clsx from 'clsx'
import Image from 'next/image'
import { s } from './styles'

export const CartEmptySection = () => {
	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>Ваша корзина пуста</h1>
			<div className={s.imageWrapper}>
				<Image src="/emptyCart.png" alt="Корзина пуста" fill className={s.image} quality={100} />
			</div>
			<CatalogRedirectMessage />
		</section>
	)
}
