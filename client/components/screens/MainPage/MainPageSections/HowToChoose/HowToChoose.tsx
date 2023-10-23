import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import { container } from '@/styles/container'
import { s } from './styles'
import clsx from 'clsx'

export const HowToChoose = () => {
	return (
		<section className={s.section}>
			<div className={s.wrapper}>
				<Image src="/bgGear.png" alt="Как выбрать сейф?" fill quality={100} className={s.img} />
				<div className={clsx(container, s.content)}>
					<h2 className={s.title}>Как выбрать сейф?</h2>
					<p className={s.desc}>
						Главная функция любого сейфа — <br /> это обеспечение сохранности ценных вещей
					</p>
					<Button href="/keek" styleType="filled">
						Подробнее
					</Button>
				</div>
			</div>
		</section>
	)
}
