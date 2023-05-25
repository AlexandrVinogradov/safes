import { Main } from '../components/Main/Main'
import { OrderIsProcessedSection } from './sections/OrderIsProcessedSection/OrderIsProcessedSection'

export default function NotFound() {
	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Корзина', isActive: false, to: '/cart' },
		{ name: 'Оформление заказа', isActive: true },
	]

	return (
		<Main breadCrumbs={breadCrumbs}>
			<OrderIsProcessedSection />
		</Main>
	)
}
