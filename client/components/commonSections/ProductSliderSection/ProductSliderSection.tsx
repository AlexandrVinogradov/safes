import { container } from '@/styles/container'
import { s } from './styles'
import { ProductCardType } from '@/models/IProductStore'
import { ProductSliderContainer } from './ProductSlider/ProductSliderContainer'
import clsx from 'clsx'

type PropsType = {
	productsList: ProductCardType[]
	title: string
	className?: string
}

export const ProductSliderSection = (props: PropsType) => {
	const { productsList, title, className } = props

	return (
		<section className={clsx(s.section, className)}>
			<div className={container}>
				<h2 className={s.title}>{title}</h2>
				<ProductSliderContainer productsList={productsList} />
			</div>
		</section>
	)
}
