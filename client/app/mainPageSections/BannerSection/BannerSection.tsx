import { BannerSliderContainer } from './BannerSlider/BannerSliderContainer'

const s = {
	section: 'h-[741px]',
}

export const BannerSection = () => {
	return (
		<section className={s.section}>
			<BannerSliderContainer />
		</section>
	)
}
