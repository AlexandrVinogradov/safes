import { Slider } from '@/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { s } from './styles'
import { ProductCardType } from '@/models/IProductStore'
import { ProductSlide } from './ProductSlide/ProductSlide'

type PropsType = {
	productsList: ProductCardType[]
}

export const ProductSliderContainer = (props: PropsType) => {
	const { productsList } = props

	const breakpoints = {
		320: { slidesPerView: 2, spaceBetween: 10 },
		768: { spaceBetween: 20, slidesPerView: 3 },
		1200: { slidesPerView: 4 },
	}

	return (
		<Slider breakpoints={breakpoints} slidesPerView="auto" spaceBetween={20} isSmallArrows isProgress>
			{productsList?.map((card) => (
				<SwiperSlide className={s.swiperSlide} key={card.product_id}>
					<ProductSlide card={card} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
