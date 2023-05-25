import { WatchRecentlySection } from './commonSections/WatchRecentlySection/WatchRecentlySection'
import { Main } from './components/Main/Main'
import { NotFoundContentSection } from './NotFoundSections/NotFoundContentSection/NotFoundContentSection'

export default function NotFound() {
	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: '404', isActive: true },
	]

	return (
		<Main breadCrumbs={breadCrumbs}>
			<NotFoundContentSection />
			<WatchRecentlySection />
		</Main>
	)
}
