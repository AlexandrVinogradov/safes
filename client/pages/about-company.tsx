import { GetServerSideProps, NextPage } from 'next'
import AboutCompanyPage from '@/components/screens/AboutCompanyPage/AboutCompanyPage'
import { ContentType } from '@/models/IContentStore'
import { useContentStore } from '@/store/useContentStore'

type PropsType = {
	content: ContentType
}

const AboutCompany: NextPage<PropsType> = ({ content }) => {
	return <AboutCompanyPage content={content} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async () => {
	const { fetchSelectedContent } = useContentStore.getState()

	const content = (await fetchSelectedContent('aboutCompany')) as ContentType

	return {
		props: { content },
	}
}

export default AboutCompany
