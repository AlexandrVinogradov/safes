import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { NewsType } from '@/models/INewsStore'

type State = {}

type Actions = {
	fetchNews: () => Promise<NewsType[]>
	fetchSelectedNews: (alias: string) => Promise<NewsType>
}

export const useNewsStore = create(
	immer<State & Actions>((set) => ({
		fetchNews: async () => {
			const response = await fetch(process.env.API_URL_NEWS || '')
			const data = await response.json()

			return data
		},

		fetchSelectedNews: async (alias) => {
			const response = await fetch(`${process.env.API_URL_NEWS}/${alias}`)
			const data = await response.json()

			return data
		},
	})),
)
