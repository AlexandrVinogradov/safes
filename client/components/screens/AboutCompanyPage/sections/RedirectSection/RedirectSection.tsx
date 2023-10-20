import { RedirectButtons } from '@/components/RedirectButtons/RedirectButtons'
import { container } from '@/styles/container'
import clsx from 'clsx'
import { s } from './styles'
import bg from '../../../../../public/bgTexture.png'

type PropsType = {
	className?: string
}

export const RedirectSection = (props: PropsType) => {
	const { className } = props

	return (
		<section className={clsx(s.section, className, container)}>
			<div
				style={{
					backgroundImage: `url(${bg.src})`,
					backgroundSize: 'cover',
				}}
			>
				<div className={s.redirectBlock}>
					<div className={s.content}>
						<p className={s.message}>Звоните, консультируйтесь, заказывайте!</p>
						<p className={clsx(s.message, s.secondMessage)}>Мы рады Вам, Вы благодарны нам!</p>
						<RedirectButtons />
					</div>
				</div>
			</div>
		</section>
	)
}
