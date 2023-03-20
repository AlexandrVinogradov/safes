import { Slider } from '@/app/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { ArticleSlide } from './ArticleSlide/ArticleSlide'

export const ArticlesSliderContainer = () => {
	const slides = [
		{
			id: '1',
			img: {
				src: '/articlePreview1.jpg',
				alt: 'Статья 1',
			},
			date: '13.06.2022',
			title: 'Какой сейфовый замок лучше выбрать',
			desc: 'В данной статье мы подробно разберем, какие бывают разновидности сейфовых замков, их плюсы и минусы и как правильно выбрать тип замка, чтобы не прогадать с покупкой сейфа.',
		},
		{
			id: '2',
			img: {
				src: '/articlePreview2.jpg',
				alt: 'Статья 2',
			},
			date: '22.04.2022',
			title: 'Как правильно выбрать огнеупорный сейф',
			desc: 'Нет никаких проблем в том, чтобы выбрать для дома обыкновенный сейф',
		},
		{
			id: '3',
			img: {
				src: '/articlePreview1.jpg',
				alt: 'Статья 3',
			},
			date: '13.06.2022',
			title: 'Какой сейфовый замок лучше выбрать',
			desc: 'В данной статье мы подробно разберем, какие бывают разновидности сейфовых замков, их плюсы и минусы и как правильно выбрать тип замка, чтобы не прогадать с покупкой сейфа.',
		},
	]

	return (
		<Slider slidesPerView={2} spaceBetween={20} isSmallArrows isProgress>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id}>
					<ArticleSlide slide={slide} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
