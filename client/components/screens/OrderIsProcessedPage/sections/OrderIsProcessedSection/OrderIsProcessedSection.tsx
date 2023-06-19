import { RedirectButtons } from '@/components/RedirectButtons/RedirectButtons'
import { container } from '@/styles/container'
import clsx from 'clsx'
import Image from 'next/image'
import { s } from './styles'

export const OrderIsProcessedSection = () => {
	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>Спасибо за заказ!</h1>
			<Image src="/orderProcessed.png" alt="Корзина пуста" width="635" height="619" className={s.image} quality={100} />
			<p className={s.message}>В ближайшее время наш менеджер свяжется с Вами</p>
			<RedirectButtons />
		</section>
	)
}
