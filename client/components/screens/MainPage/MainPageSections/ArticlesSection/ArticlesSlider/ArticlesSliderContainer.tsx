import { Slider } from '@/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { ArticleSlide } from './ArticleSlide/ArticleSlide'
import { NewsType } from '@/models/INewsStore'

type PropsType = {
	news: NewsType[]
}

export const ArticlesSliderContainer = (props: PropsType) => {
	const { news } = props

	return (
		<Slider slidesPerView={2} spaceBetween={20} isSmallArrows isProgress>
			{news.map((slide) => (
				<SwiperSlide key={slide.id}>
					<ArticleSlide slide={slide} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
