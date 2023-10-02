import { Slider } from '@/components/Slider/Slider'
import { BrandIcon1 } from '@/icons/brandsIcons/BrandIcon1'
import { BrandIcon2 } from '@/icons/brandsIcons/BrandIcon2'
import { SwiperSlide } from 'swiper/react'
import { BrandSlide } from './BrandSlide/BrandSlide'

export const BrandsSliderContainer = () => {
	const slides = [
		{
			id: '1',
			icon: <BrandIcon1 />,
			to: '/',
		},
		{
			id: '2',
			icon: <BrandIcon2 />,
			to: '/',
		},
		{
			id: '3',
			icon: <BrandIcon1 />,
			to: '/',
		},
		{
			id: '4',
			icon: <BrandIcon2 />,
			to: '/',
		},
		{
			id: '5',
			icon: <BrandIcon1 />,
			to: '/',
		},
	]
	return (
		<Slider slidesPerView={4} spaceBetween={20} isSmallArrows>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id}>
					<BrandSlide slide={slide} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
