import { Main } from '../../Main/Main'
import { Layout } from '@/components/layout/layout'
import { container } from '@/styles/container'
import { ContentType } from '@/models/IContentStore'
import styles from '../../../styles/ServerHTML.module.scss'

type PropsType = {
	content: ContentType
}

const DeliveryPage = (props: PropsType) => {
	const { content } = props
	const { title, fulltext, metadesc, metakey } = content

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Доставка и оплата', isActive: true },
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

export default DeliveryPage
