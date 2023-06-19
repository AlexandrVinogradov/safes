import { container } from '@/styles/container'
import { s } from './styles'
import { WatchRecentlySliderContainer } from '@/components/commonSections/WatchRecentlySection/WatchRecentlySlider/WatchRecentlySliderContainer'
import { ServerProductCardType } from '@/models/IProductStore'

type PropsType = {
	products: ServerProductCardType[]
}

export const WatchRecentlySection = (props: PropsType) => {
	const { products } = props

	return (
		<section className={s.section}>
			<div className={container}>
				<h2 className={s.title}>Вы недавно смотрели</h2>
				<WatchRecentlySliderContainer products={products} />
			</div>
		</section>
	)
}
