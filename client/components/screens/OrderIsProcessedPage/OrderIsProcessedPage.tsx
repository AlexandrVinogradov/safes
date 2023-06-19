import { Layout } from '@/components/layout/layout'
import { Main } from '../../Main/Main'
import { OrderIsProcessedSection } from './sections/OrderIsProcessedSection/OrderIsProcessedSection'

const OrderIsProcessedPage = () => {
	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Корзина', isActive: false, to: '/cart' },
		{ name: 'Оформление заказа', isActive: true },
	]

	return (
		<Layout title="THX">
			<Main breadCrumbs={breadCrumbs}>
				<OrderIsProcessedSection />
			</Main>
		</Layout>
	)
}

export default OrderIsProcessedPage
