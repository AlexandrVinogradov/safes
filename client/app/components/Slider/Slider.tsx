import { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

type PropsType = {
	children: ReactNode
}

export const Slider = (props: PropsType) => {
	const { children } = props

	const s = {
		swiper: `h-full
		[&>.swiper-pagination>.swiper-pagination-bullet-active]:bg-[#9BD9FE]
		[&>.swiper-pagination-horizontal]:!bottom-[50px]
		`,
	}

	return (
		<Swiper className={s.swiper} pagination={{ clickable: true }} modules={[Pagination]}>
			{children}
		</Swiper>
	)
}
