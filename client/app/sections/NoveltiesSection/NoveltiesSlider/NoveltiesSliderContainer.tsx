import { products } from '@/app/components/ProductCard/products'
import { Slider } from '@/app/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { NoveltiesSlide } from './NoveltiesSlide/NoveltiesSlide'
import { s } from './styles'

export const NoveltiesSliderContainer = () => {
	return (
		<Slider slidesPerView={4} spaceBetween={20} isSmallArrows isProgress>
			{products.map((card) => (
				<SwiperSlide className={s.swiperSlide} key={card.id}>
					<NoveltiesSlide card={card} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
