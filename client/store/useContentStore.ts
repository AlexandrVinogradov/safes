import { getClientServerUrl } from '@/helpers/getClientServerUrl'
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
				const API_URL = getClientServerUrl('content')
				const response = await fetch(`${API_URL}/${alias}`)
				const data = await response.json()

				if (!response.ok) throw new Error(data.message)

				return data
			} catch {}
		},
	})),
)