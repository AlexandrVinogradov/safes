import { Main } from '../../Main/Main'
import { Layout } from '@/components/layout/layout'
import { NewsType } from '@/models/INewsStore'
import { RedirectSection } from '../AboutCompanyPage/sections/RedirectSection/RedirectSection'
import { ArticlesSection } from '../MainPage/MainPageSections/ArticlesSection/ArticlesSection'
import { NewsSection } from './NewsSection/NewsSection'
import { s } from './styles'

type PropsType = {
	news: NewsType[]
	selectedNews: NewsType
}

const SelectedNewsPage = (props: PropsType) => {
	const { selectedNews, news } = props
	const { title, metadesc, metakey, fakeDate, image, fullHtml } = selectedNews

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Статьи', isActive: false, to: '/information' },
		{ name: title, isActive: true },
	]

	return (
		<Layout title={title} description={metadesc} keywords={metakey}>
			<Main breadCrumbs={breadCrumbs} isShowShield>
				<NewsSection title={title} fakeDate={fakeDate} fullHtml={fullHtml} image={image} />

				<RedirectSection className={s.redirectSection} />

				<ArticlesSection news={news} title="Последние новости" />
			</Main>
		</Layout>
	)
}

export default SelectedNewsPage
