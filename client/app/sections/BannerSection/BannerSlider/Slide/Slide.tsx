import Image from 'next/image'
import { Button } from '@/app/components/Button/Button'
import { SlideType } from './ISlide'
import { s } from './styles'

type PropsType = {
	slide: SlideType
}

export const Slide = (props: PropsType) => {
	const { slide } = props

	return (
		<>
			<div className={s.slide}>
				<div className={s.info}>
					<p className={s.tag}>{slide.tag}</p>
					<h1 className={s.title}>{slide.title}</h1>
					<p className={s.desc}>{slide.desc}</p>
					<Button>Смотреть</Button>
				</div>
				<div>
					{/* <div className={s.blur} /> */}
					{/* <Image src={slide.imgSrc} alt={slide.desc} width={566} height={727} className={s.bannerImg} /> */}
				</div>
			</div>
			<Image src="/bannerWithSafe.jpg" alt="Карусель фон" layout="fill" />
		</>
	)
}
