import { container } from '@/app/styles/container'
import { WatchRecentlySliderContainer } from './WatchRecentlySlider/WatchRecentlySliderContainer'
import { s } from './styles'

export const WatchRecentlySection = () => {
	return (
		<section className={s.section}>
			<div className={container}>
				<h2 className={s.title}>Вы недавно смотрели</h2>
				<WatchRecentlySliderContainer />
			</div>
		</section>
	)
}
