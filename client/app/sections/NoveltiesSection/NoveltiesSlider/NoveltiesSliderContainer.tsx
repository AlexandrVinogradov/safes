import { Slider } from '@/app/components/Slider/Slider'
import { useAppStore } from '@/app/store/store'
import { SwiperSlide } from 'swiper/react'
import { NoveltiesSlide } from './NoveltiesSlide/NoveltiesSlide'
import { s } from './styles'

export const NoveltiesSliderContainer = () => {
	const { products } = useAppStore()

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
