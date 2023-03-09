import { container } from '@/app/styles/container'
import { containerPr } from '@/app/styles/containerPr'
import { BrandsSliderContainer } from './BrandsSlider/BrandsSliderContainer'
import { s } from './styles'

export const BrandsSection = () => {
	return (
		<section className={s.section}>
			<div className={containerPr}>
				<h2 className={s.title}>Бренды</h2>
				<BrandsSliderContainer />
			</div>
		</section>
	)
}
