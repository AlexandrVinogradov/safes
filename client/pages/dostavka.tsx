import { GetServerSideProps, NextPage } from 'next'
import { ContentType } from '@/models/IContentStore'
import DeliveryPage from '@/components/screens/DeliveryPage/DeliveryPage'
import { useContentStore } from '@/store/useContentStore'

type PropsType = {
	content: ContentType
}

const Delivery: NextPage<PropsType> = ({ content }) => {
	return <DeliveryPage content={content} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async () => {
	const { fetchSelectedContent } = useContentStore.getState()

	const content = (await fetchSelectedContent('delivery')) as ContentType

	return {
		props: { content },
	}
}

export default Delivery
