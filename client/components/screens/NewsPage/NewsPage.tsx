import { Main } from '../../Main/Main'
import { Layout } from '@/components/layout/layout'
import { container } from '@/styles/container'
import { Button } from '@/components/Button/Button'
import { ContentType } from '@/models/IContentStore'
import { s } from './styles'
import { NewsType } from '@/models/INewsStore'

type PropsType = {
	news: NewsType[]
	content: ContentType
}

const NewsPage = (props: PropsType) => {
	const { news, content } = props
	const { title, metadesc, metakey } = content

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Статьи', isActive: true },
	]

	return (
		<Layout title={title} description={metadesc} keywords={metakey}>
			<Main breadCrumbs={breadCrumbs} isShowShield>
				<section className={container}>
					<h1 className={s.title}>{title}</h1>

					<p className={s.intro}>{content.introtext}</p>

					<ul className={s.list}>
						{news.map((el) => (
							<li key={el.id}>
								<h3 className={s.newsTitle}>{el.title}</h3>

								<div className={s.previewHtml} dangerouslySetInnerHTML={{ __html: el.previewHtml }} />

								<Button className={s.button} href={`/information/${el.alias}`}>
									Подробнее...
								</Button>
							</li>
						))}
					</ul>
				</section>
			</Main>
		</Layout>
	)
}

export default NewsPage
