import { Slider } from '@/app/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { NoveltiesSlide } from './NoveltiesSlide/NoveltiesSlide'

export const NoveltiesSliderContainer = () => {
	const cards = [
		{
			id: '1',
			name: 'Сейф VALBERG КВАРЦИТ 25',
			code: '12412',
			srcImg: '/card1.jpg',
			manufacturer: 'VALBERG (Россия)',
			dimensions: '(ВхШхГ): 250x375x360',
			weight: '57',
			burglaryResistance: '1 класс',
			fireResistance: '30Б - 30 минут',
			castleType: 'ключевой',
			price: '1 218 980',
			priceBeforeDiscount: '19 975',
		},
		{
			id: '2',
			name: 'Сейф VALBERG КВАРЦИТ 25',
			code: '12412',
			srcImg: '/card2.jpg',
			manufacturer: 'VALBERG (Россия)',
			dimensions: '(ВхШхГ): 250x375x360',
			weight: '57',
			burglaryResistance: '1 класс',
			fireResistance: '30Б - 30 минут',
			castleType: 'ключевой',
			price: '1 218 980',
			priceBeforeDiscount: '19 975',
		},
		{
			id: '3',
			name: 'Сейф VALBERG КВАРЦИТ 25',
			code: '12412',
			srcImg: '/card1.jpg',
			manufacturer: 'VALBERG (Россия)',
			dimensions: '(ВхШхГ): 250x375x360',
			weight: '57',
			burglaryResistance: '1 класс',
			fireResistance: '30Б - 30 минут',
			castleType: 'ключевой',
			price: '1 218 980',
			priceBeforeDiscount: '19 975',
		},
		{
			id: '4',
			name: 'Сейф VALBERG КВАРЦИТ 25',
			code: '12412',
			srcImg: '/card2.jpg',
			manufacturer: 'VALBERG (Россия)',
			dimensions: '(ВхШхГ): 250x375x360',
			weight: '57',
			burglaryResistance: '1 класс',
			fireResistance: '30Б - 30 минут',
			castleType: 'ключевой',
			price: '1 218 980',
			priceBeforeDiscount: '19 975',
		},
		{
			id: '5',
			name: 'Сейф VALBERG КВАРЦИТ 25',
			code: '12412',
			srcImg: '/card1.jpg',
			manufacturer: 'VALBERG (Россия)',
			dimensions: '(ВхШхГ): 250x375x360',
			weight: '57',
			burglaryResistance: '1 класс',
			fireResistance: '30Б - 30 минут',
			castleType: 'ключевой',
			price: '1 218 980',
			priceBeforeDiscount: '19 975',
		},
	]

	return (
		<Slider slidesPerView={4} spaceBetween={20} isArrows isProgress>
			{cards.map((card) => (
				<SwiperSlide className="p-[3px]" key={card.id}>
					<NoveltiesSlide card={card} />
				</SwiperSlide>
			))}
		</Slider>
	)
}
