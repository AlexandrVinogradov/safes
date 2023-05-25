'use client'
import { Slider } from '@/app/components/Slider/Slider'
import { useProductStore } from '@/app/store/useProductStore'
import { useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import { s } from './styles'
import { WatchRecentlySlide } from './WatchRecentlySlide/WatchRecentlySlide'

export const WatchRecentlySliderContainer = () => {
	const products = useProductStore((state) => state.products)
	const fetchProducts = useProductStore((state) => state.fetchProducts)
	const baseUrl = useProductStore((state) => state.baseUrl)

	useEffect(() => {
		fetchProducts(baseUrl)
	}, [])

	return (
		<Slider slidesPerView={4} spaceBetween={20} isSmallArrows isProgress>
			{products.map((card) => (
				<SwiperSlide className={s.swiperSlide} key={card.product_id}>
					<WatchRecentlySlide card={card} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
