import { Button } from '@/app/components/Button/Button'
import Image from 'next/image'
import { container } from '@/app/styles/container'
import { s } from './styles'

export const HowToChoose = () => {
	return (
		<section className={s.section}>
			<div className={container}>
				<h2 className={s.title}>Как выбрать сейф?</h2>
				<p className={s.desc}>
					Главная функция любого сейфа — <br /> это обеспечение сохранности ценных вещей
				</p>
				<Button href='/keek' type="filled">Подробнее</Button>
			</div>

			<Image className={s.bgImg} src="/gearBg.jpg" alt='Как выбрать сейф?' width={976} height={349} quality={100}/>
		</section>
	)
}
