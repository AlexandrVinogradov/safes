import { GetServerSideProps, NextPage } from 'next'
import { useInstructionsStore } from '@/store/useInstructionsStore'
import { InstructionsDataType } from '@/models/IInstructionsStore'
import InstructionsPage from '@/components/screens/InstructionsPage/InstructionsPage'

type PropsType = {
	instructionsData: InstructionsDataType
}

const Instructions: NextPage<PropsType> = ({ instructionsData }) => {
	return <InstructionsPage instructionsData={instructionsData} />
}

export const getServerSideProps: GetServerSideProps<PropsType> = async ({ query }) => {
	const { fetchInstructionsData } = useInstructionsStore.getState()

	const instructionsData = (await fetchInstructionsData(String(query.id))) as InstructionsDataType

	return {
		props: { instructionsData },
	}
}

export default Instructions