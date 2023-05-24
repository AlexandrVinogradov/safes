import { Button } from '@/app/components/Button/Button'
import { container } from '@/app/styles/container'
import clsx from 'clsx'
import { s } from './styles'

export const RedirectSection = () => {
	return (
		<section className={clsx(s.section, container)}>
			<div className={s.redirectBlock}>
				<div className={s.content}>
					<p className={clsx(s.firstMessage, s.message)}>Звоните, консультируйтесь, заказывайте!</p>
					<p className={s.message}>Мы рады Вам, Вы благодарны нам!</p>
					<div className={s.buttons}>
						<Button className={s.button} href="/">
							На главную
						</Button>
						<Button className={s.button} href="/catalog">
							В каталог
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
