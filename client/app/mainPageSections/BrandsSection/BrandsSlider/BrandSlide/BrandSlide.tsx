import Link from 'next/link'
import { BrandSlideType } from './IBrandSlide'
import { s } from './styles'

type PropsType = {
	slide: BrandSlideType
}

export const BrandSlide = (props: PropsType) => {
	const { slide } = props

	return (
		<div>
			<Link className={s.brand} href={slide.to}>
				{slide.icon}
			</Link>
		</div>
	)
}
