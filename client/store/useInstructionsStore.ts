import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { InstructionCategoryType, InstructionsDataType } from '@/models/IInstructionsStore'

type State = {
	instructionsData: InstructionsDataType
}

type Actions = {
	fetchInstructionsCategories: () => Promise<InstructionCategoryType[]>
	fetchInstructionsData: (alias: string) => Promise<InstructionsDataType>
}

export const useInstructionsStore = create(
	immer<State & Actions>((set) => ({
		instructionsData: {
			instructionCategory: {
				id: 666,
				title: '',
				alias: '',
				createdAt: '',
				updateAt: '',
				metakey: '',
				metadesc: '',
			},
			instructions: [],
		},
		fetchInstructionsCategories: async () => {
			const response = await fetch(process.env.API_URL_INSTRUCTIONS || '')
			const data = await response.json()

			return data
		},

		fetchInstructionsData: async (alias) => {
			const response = await fetch(`${process.env.API_URL_INSTRUCTIONS}/${alias}`)
			const data = await response.json()

			return data
		},
	})),
)
