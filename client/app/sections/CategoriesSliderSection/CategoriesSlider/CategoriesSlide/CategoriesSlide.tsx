import Image from 'next/image'
import { ICategoriesSlide } from './ICategoriesSlide'
import { s } from './styles'

type PropsType = {
	slide: ICategoriesSlide
}

export const CategoriesSlide = (props: PropsType) => {
	const { slide } = props

	return (
		<div className={s.slideWrapper}>
			<h3 className={s.title}>{slide.title}</h3>
			<Image className={s.img} alt={slide.img.alt} src={slide.img.src} width={330} height={330} priority />
		</div>
	)
}
