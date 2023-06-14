import { useProductStore } from '@/app/store/useProductStore'
import { container } from '@/app/styles/container'
import { NoveltiesSliderContainer } from './NoveltiesSlider/NoveltiesSliderContainer'
import { s } from './styles'

export const NoveltiesSection = () => {
	const { products, fetchProducts } = useProductStore.getState()
	if (!products) fetchProducts(process.env.API_URL_PRODUCTS || '')

	return (
		<section className={s.section}>
			<div className={container}>
				<h2 className={s.title}>Новинки</h2>
				<NoveltiesSliderContainer products={products} />
			</div>
		</section>
	)
}
