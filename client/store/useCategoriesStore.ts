import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { CategoryType } from '@/models/ICategoriesStore'

type State = {
	categories: CategoryType[]
}

type Actions = {
	fetchCategories: (url: string) => Promise<CategoryType[] | CategoryType>
}

export const useCategoriesStore = create(
	immer<State & Actions>((set) => ({
		categories: [],
		fetchCategories: async (url: string) => {
			try {
				const response = await fetch(url)
				const data = await response.json()

				set({ categories: data })
				return data
			} catch {}
		},
	})),
)
