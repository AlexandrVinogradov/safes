import { Slider } from '@/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { s } from './styles'
import { ServerProductCardType } from '@/models/IProductStore'
import { ProductSlide } from './ProductSlide/ProductSlide'

type PropsType = {
	productsList: ServerProductCardType[]
}

export const ProductSliderContainer = (props: PropsType) => {
	const { productsList } = props

	return (
		<Slider slidesPerView={4} spaceBetween={20} isSmallArrows isProgress>
			{productsList?.map((card) => (
				<SwiperSlide className={s.swiperSlide} key={card.product_id}>
					<ProductSlide card={card} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
