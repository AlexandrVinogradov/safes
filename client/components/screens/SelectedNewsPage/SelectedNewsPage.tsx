import { Main } from '../../Main/Main'
import { Layout } from '@/components/layout/layout'
import { container } from '@/styles/container'
import { s } from './styles'
import { NewsType } from '@/models/INewsStore'
import { RedirectSection } from '../AboutCompanyPage/sections/RedirectSection/RedirectSection'
import { ArticlesSection } from '../MainPage/MainPageSections/ArticlesSection/ArticlesSection'

type PropsType = {
	selectedNews: NewsType
}

const SelectedNewsPage = (props: PropsType) => {
	const { selectedNews } = props
	const { title, metadesc, metakey, createdAt } = selectedNews

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Статьи', isActive: false, to: '/information' },
		{ name: title, isActive: true },
	]

	return (
		<Layout title={title} description={metadesc} keywords={metakey}>
			<Main breadCrumbs={breadCrumbs} isShowShield>
				<section className={container}>
					<h1 className={s.title}>{title}</h1>

					<p className={s.date}>{createdAt}</p>

					<p className="pb-[70px]">HTML</p>
				</section>

				<RedirectSection className={s.redirectSection} />

				<ArticlesSection title="Последние новости" />
			</Main>
		</Layout>
	)
}

export default SelectedNewsPage
