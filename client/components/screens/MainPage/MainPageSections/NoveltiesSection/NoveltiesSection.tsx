import { container } from '@/styles/container'
import { s } from './styles'
import { ServerProductCardType } from '@/models/IProductStore'
import { NextPage } from 'next/types'
import { NoveltiesSliderContainer } from './NoveltiesSlider/NoveltiesSliderContainer'

type PropsType = {
	products: ServerProductCardType[]
}

export const NoveltiesSection: NextPage<PropsType> = ({ products }) => {
	return (
		<section className={s.section}>
			<div className={container}>
				<h2 className={s.title}>Новинки</h2>
				<NoveltiesSliderContainer products={products} />
			</div>
		</section>
	)
}
