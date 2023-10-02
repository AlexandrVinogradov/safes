import { GetStaticProps, GetServerSideProps, NextPage, GetStaticPaths } from 'next'
import { ContentType } from '@/models/IContentStore'
import { useContentStore } from '@/store/useContentStore'
import PoliciesPage from '@/components/screens/PoliciesPage/PoliciesPage'
// import axios from 'axios'

type PropsType = {
	content: ContentType
}

const Policy: NextPage<PropsType> = ({ content }) => {
	return <PoliciesPage content={content} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async () => {
// export const getStaticProps: GetStaticProps<PropsType> = async () => {
	const { fetchSelectedContent } = useContentStore.getState()

	const content = (await fetchSelectedContent('policies') || null) as ContentType

	return {
	  props: { content },
	}

	// const response = await axios.get('http://host.docker.internal:5000/content/policies')
	// try {
	// 	// if (!response.data) {
	// 	// 	throw new Error('---Failed to fetch data')
	// 	// }
	// 	const content = await response.data

	// 	console.log('=========================================================')
	// 	console.log('log', content)
	// 	console.error('err', content)
	// 	console.log('=========================================================')

	// 	return {
	// 		props: { content },
	// 	}
	// } catch (error) {
	// 	// console.error('---Error fetching data:', error)
	// 	// const error = _err as AxiosError
	// 	const content = await response.data

	// 	return {
	// 		props: { content },
	// 	}
	// }
}

export default Policy
