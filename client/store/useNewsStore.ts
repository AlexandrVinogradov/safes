import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { NewsType } from '@/models/INewsStore'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'

type State = {}

type Actions = {
	fetchNews: () => Promise<NewsType[]>
	fetchSelectedNews: (alias: string) => Promise<NewsType>
}

export const useNewsStore = create(
	immer<State & Actions>((set) => ({
		fetchNews: async () => {
			const API_URL = getClientServerUrl('news')
			const response = await fetch(API_URL)
			const data = await response.json()

			return data
		},

		fetchSelectedNews: async (alias) => {
			const API_URL = getClientServerUrl('news')
			const response = await fetch(`${API_URL}/${alias}`)
			const data = await response.json()

			return data
		},
	})),
)