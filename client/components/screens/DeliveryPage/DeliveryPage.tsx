import { Main } from '../../Main/Main'
import { Layout } from '@/components/layout/layout'
import { container } from '@/styles/container'
import { ContentType } from '@/models/IContentStore'
import styles from './test.module.scss'

type PropsType = {
	content: ContentType
}

const DeliveryPage = (props: PropsType) => {
	const { content } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Доставка и оплата', isActive: true },
	]

	return (
		<Layout title="Доставка и оплата">
			<Main breadCrumbs={breadCrumbs} isShowShield>
				<section className={container}>
					<div className={styles.content} dangerouslySetInnerHTML={{ __html: content.introtext }} />
				</section>
			</Main>
		</Layout>
	)
}

export default DeliveryPage
