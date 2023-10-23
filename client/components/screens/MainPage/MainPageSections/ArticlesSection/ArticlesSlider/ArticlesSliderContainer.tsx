import { Slider } from '@/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { ArticleSlide } from './ArticleSlide/ArticleSlide'
import { NewsType } from '@/models/INewsStore'

type PropsType = {
	news: NewsType[]
}

export const ArticlesSliderContainer = (props: PropsType) => {
	const { news } = props

	const breakpoints = {
		320: { slidesPerView: 1, spaceBetween: 22 },
		768: { slidesPerView: 2, spaceBetween: 22 },
	}

	return (
		<Slider breakpoints={breakpoints} isSmallArrows isProgress>
			{news.map((slide) => (
				<SwiperSlide key={slide.id}>
					<ArticleSlide slide={slide} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
