import { Slider } from '@/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { BannerSlide } from './BannerSlide/BannerSlide'

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
		<Slider isPagination>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id}>
					<BannerSlide slide={slide} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
