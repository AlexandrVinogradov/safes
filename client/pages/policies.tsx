import { GetStaticProps, NextPage } from 'next'
import { ContentType } from '@/models/IContentStore'
import { useContentStore } from '@/store/useContentStore'
import PoliciesPage from '@/components/screens/PoliciesPage/PoliciesPage'

type PropsType = {
	content: ContentType
}

const Policy: NextPage<PropsType> = ({ content }) => {
	return <PoliciesPage content={content} />
}

export const getStaticProps: GetStaticProps<PropsType> = async () => {
	const { fetchSelectedContent } = useContentStore.getState()

	const content = (await fetchSelectedContent('policies')) as ContentType

	return {
		props: { content },
	}
}

export default Policy
