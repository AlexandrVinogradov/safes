import { products } from '@/app/components/ProductCard/products'
import { Slider } from '@/app/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { NoveltiesSlide } from './NoveltiesSlide/NoveltiesSlide'

export const NoveltiesSliderContainer = () => {
	return (
		<Slider slidesPerView={4} spaceBetween={20} isArrows isProgress>
			{products.map((card) => (
				<SwiperSlide className="p-[3px]" key={card.id}>
					<NoveltiesSlide card={card} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
