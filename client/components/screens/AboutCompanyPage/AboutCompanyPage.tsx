import Image from 'next/image'
import { Main } from '../../Main/Main'
import { CategorySection } from './sections/CategorySection/CategorySection'
import { DescriptionSection } from './sections/DescriptionSection/DescriptionSection'
import { RedirectSection } from './sections/RedirectSection/RedirectSection'
import { s } from './styles'
import { Layout } from '@/components/layout/layout'

// FIXME: underline, redirect bg, shield, categories from back

const AboutCompanyPage = () => {
	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'О компании', isActive: true },
	]

	return (
		<Layout title="О компании">
			<Main breadCrumbs={breadCrumbs}>
				<Image src="/sh.png" alt="логотип ПРОММЕТСЕЙФ" width="352" height="941" className={s.image} />

				<DescriptionSection />
				<CategorySection />
				<RedirectSection />
			</Main>
		</Layout>
	)
}

export default AboutCompanyPage
