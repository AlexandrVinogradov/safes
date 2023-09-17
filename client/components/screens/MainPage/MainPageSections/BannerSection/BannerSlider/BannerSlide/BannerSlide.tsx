import Image from 'next/image'
import { Button } from '@/components/Button/Button'
import { BannerSlideType } from './IBannerSlide'
import { s } from './styles'
import clsx from 'clsx'
import { SwiperSlide } from 'swiper/react'
import { container } from '@/styles/container'

type PropsType = {
	slide: BannerSlideType
}

export const BannerSlide = (props: PropsType) => {
	const { slide } = props

	return (
		<SwiperSlide>
			<Image src="/bannerWithSafe.jpg" alt="Карусель фон" fill quality={100} />
			<div className={clsx(container, s.slide)}>
				<div className={s.info}>
					<p className={s.tag}>{slide.tag}</p>
					<h1 className={s.title}>{slide.title}</h1>
					<p className={s.desc}>{slide.desc}</p>
					<Button>Смотреть</Button>
				</div>
			</div>
		</SwiperSlide>
	)
}
