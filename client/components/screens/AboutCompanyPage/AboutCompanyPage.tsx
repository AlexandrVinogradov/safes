import { ContentType } from '@/models/IContentStore'
import { Main } from '../../Main/Main'
import { RedirectSection } from './sections/RedirectSection/RedirectSection'
import { Layout } from '@/components/layout/layout'
import { container } from '@/styles/container'
import styles from '../../../styles/ServerHTML.module.scss'
import kek from './AboutCompany.module.scss'
import clsx from 'clsx'
import { s } from './styles'

// FIXME: underline

type PropsType = {
	content: ContentType
}

const AboutCompanyPage = (props: PropsType) => {
	const { content } = props
	const { title, fulltext, metadesc, metakey } = content

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'О компании', isActive: true },
	]

	return (
		<Layout title={title} description={metadesc} keywords={metakey}>
			<Main breadCrumbs={breadCrumbs} isShowShield>
				<section className={container}>
					<div className={clsx(styles.content, kek.content)} dangerouslySetInnerHTML={{ __html: fulltext }} />
					<RedirectSection className={s.redirectSection} />
				</section>
			</Main>
		</Layout>
	)
}

export default AboutCompanyPage
