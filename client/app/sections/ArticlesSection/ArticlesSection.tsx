import { container } from '@/app/styles/container'
import { ArticlesSliderContainer } from './ArticlesSlider/ArticlesSliderContainer'
import { s } from './styles'

export const ArticlesSection = () => {
	return (
		<section className={s.section}>
			<div className={container}>
				<h2 className={s.title}>Статьи</h2>
				<ArticlesSliderContainer />
			</div>
		</section>
	)
}
