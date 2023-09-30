import { Galley } from '@/components/Gallery/Gallery'
import { SwiperSlide } from 'swiper/react'
import { GallerySlide } from './GallerySlide'

type PropsType = {
	items:
		| {
				id: number
				src: string
				alt: string
		  }[]
		| undefined
}

export const ProductGallery = (props: PropsType) => {
	const { items } = props

	if (!items) return null

	return (
		<Galley>
			{items.map((slide) => (
				<SwiperSlide key={slide.id}>
					<GallerySlide slide={slide} />
				</SwiperSlide>
			))}
		</Galley>
	)
}
