import { Main } from '../../Main/Main'
import { Layout } from '@/components/layout/layout'
import { container } from '@/styles/container'
import { ContentType } from '@/models/IContentStore'
import styles from './PoliciesPage.module.scss'

type PropsType = {
	content: ContentType
}

const PoliciesPage = (props: PropsType) => {
	const { content } = props
	const { title, fulltext, metadesc, metakey } = content

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Политика конфиденциальности', isActive: true },
	]

	return (
		<Layout title={title} description={metadesc} keywords={metakey}>
			<Main breadCrumbs={breadCrumbs} isShowShield>
				<section className={container}>
					<div className={styles.content} dangerouslySetInnerHTML={{ __html: fulltext }} />
				</section>
			</Main>
		</Layout>
	)
}

export default PoliciesPage
