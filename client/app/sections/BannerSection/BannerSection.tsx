import { Slider } from '@/app/components/Slider/Slider'
import { BannerSliderContainer } from './BannerSlider/BannerSliderContainer'

export const BannerSection = () => {
	const s = {
		section: 'h-[741px]',
	}

	return (
		<section className={s.section}>
			<BannerSliderContainer />
		</section>
	)
}
