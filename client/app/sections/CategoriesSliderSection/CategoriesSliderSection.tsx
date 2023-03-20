import { container } from '@/app/styles/container'
import { CategoriesSliderContainer } from './CategoriesSlider/CategoriesSliderContainer'
import { s } from './styles'

export const CategoriesSliderSection = () => {
	return (
		<section className={s.section}>
			<div className={container}>
				<CategoriesSliderContainer />
			</div>
		</section>
	)
}
