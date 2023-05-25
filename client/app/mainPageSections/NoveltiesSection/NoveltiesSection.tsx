import { container } from '@/app/styles/container'
import { NoveltiesSliderContainer } from './NoveltiesSlider/NoveltiesSliderContainer'
import { s } from './styles'

export const NoveltiesSection = () => {
	return (
		<section className={s.section}>
			<div className={container}>
				<h2 className={s.title}>Новинки</h2>
				<NoveltiesSliderContainer />
			</div>
		</section>
	)
}
