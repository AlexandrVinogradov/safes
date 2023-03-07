import { Slider } from '@/app/components/Slider/Slider'
import clsx from 'clsx'
import { SwiperSlide } from 'swiper/react'
import { Slide } from './Slide/Slide'
import { s } from './styles'

export const BannerSliderContainer = () => {
	const slides = [
		{
			tag: 'Новинки',
			title: 'BURG-WACHTER',
			desc: 'Функциональные шкафы для оружия',
			imgSrc: '/bannerSafe.png',
		},
		{
			tag: 'Старинки',
			title: 'BURG-WACHTER',
			desc: 'Функциональные шкафы для оружия',
			imgSrc: '/bannerSafe.png',
		},
	]

	return (
		<Slider>
			{slides.map((slide) => (
				<SwiperSlide className={clsx(s.container, s.slide)}>
					<Slide slide={slide} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
