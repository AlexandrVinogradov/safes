import { WatchRecentlySection } from '../commonSections/WatchRecentlySection/WatchRecentlySection'
import { Main } from '../components/Main/Main'
import { CartContentSection } from './sections/CartContentSection/CartContentSection'

export default function NotFound() {
	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Корзина', isActive: true },
	]

	return (
		<Main breadCrumbs={breadCrumbs}>
			<CartContentSection />
			<WatchRecentlySection />
		</Main>
	)
}
