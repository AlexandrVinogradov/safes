import { GetServerSideProps, NextPage } from 'next'
import SelectedNewsPage from '@/components/screens/SelectedNewsPage/SelectedNewsPage'
import { useNewsStore } from '@/store/useNewsStore'
import { NewsType } from '@/models/INewsStore'

type PropsType = {
	selectedNews: NewsType
}

const SelectedNews: NextPage<PropsType> = ({ selectedNews }) => {
	return <SelectedNewsPage selectedNews={selectedNews} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async ({ query }) => {
	const { fetchSelectedNews } = useNewsStore.getState()

	const selectedNews = (await fetchSelectedNews(String(query.id))) as NewsType

	return {
		props: { selectedNews },
	}
}

export default SelectedNews
