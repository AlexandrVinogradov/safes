import { GetServerSideProps, NextPage } from 'next'
import { useContentStore } from '@/store/useContentStore'
import { ContentType } from '@/models/IContentStore'
import NewsPage from '@/components/screens/NewsPage/NewsPage'
import { useNewsStore } from '@/store/useNewsStore'
import { NewsType } from '@/models/INewsStore'

type PropsType = {
	news: NewsType[]
	content: ContentType
}

const Instructions: NextPage<PropsType> = ({ news, content }) => {
	return <NewsPage news={news} content={content} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async () => {
	const { fetchNews } = useNewsStore.getState()
	const { fetchSelectedContent } = useContentStore.getState()

	const news = (await fetchNews()) as NewsType[]
	const content = (await fetchSelectedContent('articles')) as ContentType

	return {
		props: { news, content },
	}
}

export default Instructions
