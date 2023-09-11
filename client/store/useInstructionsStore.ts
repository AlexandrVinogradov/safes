import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { InstructionCategoryType, InstructionsDataType } from '@/models/IInstructionsStore'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'

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
			const API_URL = getClientServerUrl('instructions')
			const response = await fetch(API_URL)
			const data = await response.json()

			return data
		},

		fetchInstructionsData: async (alias) => {
			const API_URL = getClientServerUrl('instructions')
			const response = await fetch(`${API_URL}/${alias}`)
			const data = await response.json()

			return data
		},
	})),
)