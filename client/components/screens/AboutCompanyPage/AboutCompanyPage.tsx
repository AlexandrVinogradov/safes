import { Main } from '../../Main/Main'
import { CategorySection } from './sections/CategorySection/CategorySection'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { RedirectSection } from './sections/RedirectSection/RedirectSection'
import { Layout } from '@/components/layout/layout'

// FIXME: underline, redirect bg, shield, categories from back

const AboutCompanyPage = () => {
	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'О компании', isActive: true },
	]

	return (
		<Layout title="О компании">
			<Main breadCrumbs={breadCrumbs} isShowShield>
				<DescriptionSection />
				<CategorySection />
				<RedirectSection />
			</Main>
		</Layout>
	)
}

export default AboutCompanyPage
