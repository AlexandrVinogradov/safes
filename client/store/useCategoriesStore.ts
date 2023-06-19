import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { CategoriesType } from '../../models/ICategoriesStore'

type State = {
	categories: CategoriesType[]
}

type Actions = {
	fetchCategories: (url: string) => void
}

export const useCategoriesStore = create(
	immer<State & Actions>((set) => ({
		categories: [],
		fetchCategories: async (url: string) => {
			const res = await fetch(url)

			set({ categories: await res.json() })
		},
	})),
)
