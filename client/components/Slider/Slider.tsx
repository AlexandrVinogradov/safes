import { ReactNode } from 'react'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import { SwiperModule, SwiperOptions } from 'swiper/types'
import { SmallArrowLeftIcon } from '@/icons/SmallArrowLeftIcon'
import clsx from 'clsx'
import { SmallArrowRightIcon } from '@/icons/SmallArrowRightIcon'
import { BigArrowLeftIcon } from '@/icons/BigArrowLeftIcon'
import { BigArrowRightIcon } from '@/icons/BigArrowRightIcon'

type PropsType = {
	children: ReactNode
	isPagination?: boolean
	slidesPerView?: number | 'auto'
	breakpoints?:
		| {
				[width: number]: SwiperOptions
				[ratio: string]: SwiperOptions
		  }
		| undefined
	spaceBetween?: number
	isSmallArrows?: boolean
	isBigArrows?: boolean
	isProgress?: boolean
	styles?: string
}

// FIXME:
const s = {
	swiper: `h-full
	[&>.swiper-wrapper]:items-center
	[&>.swiper-pagination>.swiper-pagination-bullet-active]:bg-[#9BD9FE]
	[&>.swiper-pagination-horizontal]:!bottom-[50px]

	[&>.swiper-pagination-progressbar]:!bottom-0
	[&>.swiper-pagination-progressbar]:!top-[unset]
	[&>.swiper-pagination-progressbar]:!bg-dimBranded
	[&>.swiper-pagination-progressbar>.swiper-pagination-progressbar-fill]:!bg-branded
	`,
	withSmallArrows: '!pt-[74px] !pb-[24px]',
	withBigArrows: `!pb-[24px] !px-[40px] 
		[&>.swiper-pagination-horizontal]:!bottom-[0px]`,
	navigation: `absolute top-0 right-0 z-10 flex justify-between max-w-[78px] w-full swiper-navigation
		maxMd:top-5
	`,

	arrowButton: 'text-branded disabled:text-[#8F8F8F]',
	smallArrowButton: 'w-6 h-[14px]',
	bigArrowLiftButton: 'z-10 absolute left-0 top-[40%]',
	bigArrowRightButton: 'z-10 absolute right-0 top-[40%]',
}

export const Slider = (props: PropsType) => {
	const {
		children,
		isPagination,
		slidesPerView = 1,
		breakpoints,
		spaceBetween = 0,
		isSmallArrows = false,
		isBigArrows = false,
		isProgress,
		styles,
	} = props

	const getModules = () => {
		const modules: SwiperModule[] = []

		if (isPagination || isProgress) modules.push(Pagination)
		if (isSmallArrows || isBigArrows) modules.push(Navigation)

		return modules
	}

	return (
		<Swiper
			className={clsx(s.swiper, isSmallArrows && s.withSmallArrows, isBigArrows && s.withBigArrows, styles)}
			pagination={{
				clickable: true,
				type: isProgress ? 'progressbar' : 'bullets',
			}}
			breakpoints={breakpoints}
			modules={getModules()}
			slidesPerView={slidesPerView}
			spaceBetween={spaceBetween}
			navigation={{
				prevEl: '.prev',
				nextEl: '.next',
			}}
		>
			{isSmallArrows && (
				<div className={s.navigation}>
					<button className={clsx('prev', s.arrowButton, s.smallArrowButton)}>
						<SmallArrowLeftIcon />
					</button>
					<button className={clsx('next', s.arrowButton, s.smallArrowButton)}>
						<SmallArrowRightIcon />
					</button>
				</div>
			)}

			{isBigArrows && (
				<>
					<button className={clsx('prev', s.arrowButton, s.bigArrowLiftButton)}>
						<BigArrowLeftIcon />
					</button>
					<button className={clsx('next', s.arrowButton, s.bigArrowRightButton)}>
						<BigArrowRightIcon />
					</button>
				</>
			)}

			{children}
		</Swiper>
	)
}
