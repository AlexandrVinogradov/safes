import Image from 'next/image'
import { Main } from '../components/Main/Main'
import { CategorySection } from './sections/CategorySection/CategorySection'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { RedirectSection } from './sections/RedirectSection/RedirectSection'
import { s } from './styles'

// FIXME: underline, redirect bg, shield, categories from back

export default function AboutCompany() {
	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'О компании', isActive: true },
	]

	return (
		<Main breadCrumbs={breadCrumbs}>
			<Image src="/semiShieldAboutCompany.png" alt="логотип ПРОММЕТСЕЙФ" width="352" height="941" className={s.image} />

			<DescriptionSection />
			<CategorySection />
			<RedirectSection />
		</Main>
	)
}
