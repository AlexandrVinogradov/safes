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
			<Image className={s.img} alt={slide.img.alt} src={slide.img.src} width={630} height={330} priority  quality={100}/>
		</div>
	)
}
