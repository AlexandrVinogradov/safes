import { CatalogRedirectMessage } from '@/app/components/CatalogRedirectMessage/CatalogRedirectMessage'
import { container } from '@/app/styles/container'
import clsx from 'clsx'
import Image from 'next/image'
import { s } from './styles'

export const CartContentSection = () => {
	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>Ваша корзина пуста</h1>
			<Image src="/emptyCart.png" alt="Корзина пуста" width="432" height="455" className={s.image} quality={100} />
			<CatalogRedirectMessage />
		</section>
	)
}
