import { Slider } from '@/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { CategoriesSlide } from './CategoriesSlide/CategoriesSlide'
import { s } from './styles'

export const CategoriesSliderContainer = () => {
	const slides = [
		{
			id: '1',
			img: {
				src: '/CategoryImage1.jpg',
				alt: 'сейфы для дома',
			},
			title: 'Для дома',
		},
		{
			id: '2',
			img: {
				src: '/CategoryImage2.jpg',
				alt: 'сейфы для офиса',
			},
			title: 'Для офиса',
		},
		{
			id: '3',
			img: {
				src: '/CategoryImage1.jpg',
				alt: 'сейфы для дома',
			},
			title: 'Для дома',
		},
	]

	return (
		<Slider slidesPerView={2} spaceBetween={52} isBigArrows isPagination styles={s.slider}>
			{slides.map((slide) => (
				<SwiperSlide className={s.swiperSlide} key={slide.id}>
					<CategoriesSlide slide={slide} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
