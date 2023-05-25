import { Slider } from '@/app/components/Slider/Slider'
import { useProductStore } from '@/app/store/useProductStore'
import { SwiperSlide } from 'swiper/react'
import { NoveltiesSlide } from './NoveltiesSlide/NoveltiesSlide'
import { s } from './styles'

export const NoveltiesSliderContainer = () => {
	const products = useProductStore((state) => state.products)

	return (
		<Slider slidesPerView={4} spaceBetween={20} isSmallArrows isProgress>
			{products.map((card) => (
				<SwiperSlide className={s.swiperSlide} key={card.product_id}>
					<NoveltiesSlide card={card} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
