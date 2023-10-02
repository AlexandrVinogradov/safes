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
	videoLink?: string
}

export type GalleryItemType = {
	id: number
	videoHtml?: string
	src?: string
	alt?: string
}

export const ProductGallery = (props: PropsType) => {
	const { items, videoLink } = props

	if (!items) return null

	let itemWithVideo: GalleryItemType[] = items
	if (videoLink) {
		itemWithVideo = [
			...itemWithVideo,
			// TODO: add video to Gallery
			//  { id: itemWithVideo.length + 1, videoHtml: videoLink }
		]
	}

	return (
		<Galley>
			{itemWithVideo.map((slide) => (
				<SwiperSlide key={slide.id}>
					<GallerySlide slide={slide} />
				</SwiperSlide>
			))}
		</Galley>
	)
}
