import { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import { SwiperModule } from 'swiper/types'
import { ArrowLeftIcon } from '@/app/icons/ArrowLeftIcon'
import clsx from 'clsx'
import { ArrowRightIcon } from '@/app/icons/ArrowRightIcon'

type PropsType = {
	children: ReactNode
	isPagination?: boolean
	slidesPerView?: number
	spaceBetween?: number
	isArrows?: boolean
}

const s = {
	swiper: `h-full
	[&>.swiper-wrapper]:items-center
	[&>.swiper-pagination>.swiper-pagination-bullet-active]:bg-[#9BD9FE]
	[&>.swiper-pagination-horizontal]:!bottom-[50px]
	`,
	withArrows: '!pt-[74px]',
	navigation: 'absolute top-0 right-0 z-10 flex justify-between max-w-[78px] w-full swiper-navigation',
	arrowButton: 'w-6 h-[14px] text-branded disabled:text-[#8F8F8F]',
}

export const Slider = (props: PropsType) => {
	const { children, isPagination, slidesPerView = 1, spaceBetween = 0, isArrows = false } = props

	const getModules = () => {
		const modules: SwiperModule[] = []

		if (isPagination) modules.push(Pagination)
		if (isArrows) modules.push(Navigation)

		return modules
	}

	return (
		<Swiper
			className={clsx(s.swiper, isArrows && s.withArrows)}
			pagination={{ clickable: true }}
			modules={getModules()}
			slidesPerView={slidesPerView}
			spaceBetween={spaceBetween}
			navigation={{
				prevEl: '.prev',
				nextEl: '.next',
			}}
		>
			{isArrows && (
				<div className={s.navigation}>
					<button className={clsx('prev', s.arrowButton)}>
						<ArrowLeftIcon />
					</button>
					<button className={clsx('next', s.arrowButton)}>
						<ArrowRightIcon />
					</button>
				</div>
			)}

			{children}
		</Swiper>
	)
}
