import { container } from '@/styles/container'
import clsx from 'clsx'
import Image from 'next/image'
import { BrandsSliderContainer } from './BrandsSlider/BrandsSliderContainer'
import { s } from './styles'

export const BrandsSection = () => {
	return (
		<section className={s.section}>
			<Image className={s.bgImg} src="/brandsSliderBg.jpg" alt="Наши бренды" fill quality={100} />

			<div className={clsx(container, s.content)}>
				<h2 className={s.title}>Бренды</h2>
				<BrandsSliderContainer />
			</div>
		</section>
	)
}
