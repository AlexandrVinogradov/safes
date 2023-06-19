import { RedirectButtons } from '@/components/RedirectButtons/RedirectButtons'
import { container } from '@/styles/container'
import clsx from 'clsx'
import { s } from './styles'

export const RedirectSection = () => {
	return (
		<section className={clsx(s.section, container)}>
			<div className={s.redirectBlock}>
				<div className={s.content}>
					<p className={s.message}>Звоните, консультируйтесь, заказывайте!</p>
					<p className={clsx(s.secondMessage, s.message)}>Мы рады Вам, Вы благодарны нам!</p>
					<RedirectButtons />
				</div>
			</div>
		</section>
	)
}
