import { Slider } from '@/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { s } from './styles'
import { WatchRecentlySlide } from './WatchRecentlySlide/WatchRecentlySlide'
import { ServerProductCardType } from '@/models/IProductStore'

type PropsType = {
	products: ServerProductCardType[]
}

export const WatchRecentlySliderContainer = (props: PropsType) => {
	const { products } = props

	return (
		<Slider slidesPerView={4} spaceBetween={20} isSmallArrows isProgress>
			{products?.map((card) => (
				<SwiperSlide className={s.swiperSlide} key={card.product_id}>
					<WatchRecentlySlide card={card} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
