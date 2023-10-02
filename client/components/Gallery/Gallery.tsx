import React, { ReactNode, useState } from 'react'
import { Swiper } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper'
import { Swiper as SwiperType } from 'swiper/types'

import styles from './Swiper.module.scss'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

type PropsType = {
	children: ReactNode
}

export const Galley = (props: PropsType) => {
	const { children } = props

	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

	return (
		<div className={styles.Swiper}>
			<Swiper
				spaceBetween={10}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[FreeMode, Thumbs]}
				className="mySwiper2"
			>
				{children}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Thumbs]}
				className="mySwiper"
			>
				{children}
			</Swiper>
		</div>
	)
}
