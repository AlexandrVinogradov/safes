import { Slider } from '@/app/components/Slider/Slider'
import clsx from 'clsx'
import { SwiperSlide } from 'swiper/react'
import { Slide } from './Slide/Slide'
import { s } from './styles'

export const BannerSliderContainer = () => {
	const slides = [
		{
			id: 1,
			tag: 'Новинки',
			title: 'BURG-WACHTER',
			desc: 'Функциональные шкафы для оружия',
			imgSrc: '/bannerSafe.png',
		},
		{
			id: 2,
			tag: 'Старинки',
			title: 'BURG-WACHTER',
			desc: 'Функциональные шкафы для оружия',
			imgSrc: '/bannerSafe.png',
		},
	]

	return (
		<Slider>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id} className={clsx(s.container, s.slide)}>
					<Slide slide={slide} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
