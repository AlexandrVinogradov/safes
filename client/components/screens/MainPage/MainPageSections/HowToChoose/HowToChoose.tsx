import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import { container } from '@/styles/container'
import { s } from './styles'
import clsx from 'clsx'

export const HowToChoose = () => {
	return (
		<section className={s.section}>
			<Image src="/bgGear.jpg" alt="Как выбрать сейф?" fill quality={100} />
			<div className={clsx(container, s.content)}>
				<h2 className={s.title}>Как выбрать сейф?</h2>
				<p className={s.desc}>
					Главная функция любого сейфа — <br /> это обеспечение сохранности ценных вещей
				</p>
				<Button href="/keek" type="filled">
					Подробнее
				</Button>
			</div>
		</section>
	)
}
