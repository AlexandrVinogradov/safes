import { ContentType } from '@/models/IContentStore'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
	content: ContentType[]
}

type Actions = {
	fetchSelectedContent: (alias: string) => Promise<ContentType>
}

export const useContentStore = create(
	immer<State & Actions>((set) => ({
		content: [],
		fetchSelectedContent: async (alias: string) => {
			try {
				const response = await fetch(`${process.env.API_URL_CONTENT}/${alias}` || '')
				const data = await response.json()

				if (!response.ok) throw new Error(data.message)

				return data
			} catch {}
		},
	})),
)
