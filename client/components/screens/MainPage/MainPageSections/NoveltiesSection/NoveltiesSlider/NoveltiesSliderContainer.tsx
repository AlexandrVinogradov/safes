import { Slider } from '@/components/Slider/Slider'
import { ServerProductCardType } from '@/models/IProductStore'
import { SwiperSlide } from 'swiper/react'
import { NoveltiesSlide } from './NoveltiesSlide/NoveltiesSlide'
import { s } from './styles'

type PropsType = {
	products: ServerProductCardType[] | null
}
export const NoveltiesSliderContainer = (props: PropsType) => {
	const { products } = props

	return (
		<Slider slidesPerView={4} spaceBetween={20} isSmallArrows isProgress>
			{products?.map((card) => (
				<SwiperSlide className={s.swiperSlide} key={card.product_id}>
					<NoveltiesSlide card={card} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
