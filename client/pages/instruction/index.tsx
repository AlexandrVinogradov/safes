import { GetServerSideProps, NextPage } from 'next'
import { useInstructionsStore } from '@/store/useInstructionsStore'
import { InstructionCategoryType } from '@/models/IInstructionsStore'
import InstructionCategoriesPage from '@/components/screens/InstructionCategoriesPage/InstructionCategoriesPage'
import { useContentStore } from '@/store/useContentStore'
import { ContentType } from '@/models/IContentStore'

type PropsType = {
	instructionsCategories: InstructionCategoryType[]
	content: ContentType
}

const Instructions: NextPage<PropsType> = ({ instructionsCategories, content }) => {
	return <InstructionCategoriesPage instructionCategories={instructionsCategories} content={content} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async () => {
	const { fetchInstructionsCategories } = useInstructionsStore.getState()
	const { fetchSelectedContent } = useContentStore.getState()

	const instructionsCategories = (await fetchInstructionsCategories()) as InstructionCategoryType[]
	const content = (await fetchSelectedContent('instructions')) as ContentType

	return {
		props: { instructionsCategories, content },
	}
}

export default Instructions
