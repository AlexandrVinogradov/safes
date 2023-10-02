import { GetServerSideProps, NextPage } from 'next'
import SelectedNewsPage from '@/components/screens/SelectedNewsPage/SelectedNewsPage'
import { useNewsStore } from '@/store/useNewsStore'
import { NewsType } from '@/models/INewsStore'

type PropsType = {
	selectedNews: NewsType
	news: NewsType[]
}

const SelectedNews: NextPage<PropsType> = ({ selectedNews, news }) => {
	return <SelectedNewsPage selectedNews={selectedNews} news={news} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async ({ query }) => {
	const { fetchSelectedNews } = useNewsStore.getState()
	const { fetchNews } = useNewsStore.getState()

	const selectedNews = (await fetchSelectedNews(String(query.id))) as NewsType
	const news = (await fetchNews()) as NewsType[]

	return {
		props: { selectedNews, news },
	}
}

export default SelectedNews
