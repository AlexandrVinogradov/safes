import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { ComparisonItemType } from '@/models/IComparisonStore'
import { persist } from 'zustand/middleware'

type State = {
	comparisonItems: ComparisonItemType[]
}

type Actions = {
	addComparisonItem: (product: Omit<ComparisonItemType, 'count'>) => void
	deleteItem: (id: number) => void
	clearItems: () => void
}

export const useComparisonStore = create(
	persist(
		immer<State & Actions>((set) => ({
			comparisonItems: [],
			addComparisonItem: (product: Omit<ComparisonItemType, 'count'>) => {
				set((state) => {
					const { comparisonItems } = state
					const existProduct = comparisonItems.find((el) => el.product_id === product.product_id)

					if (existProduct) return

					comparisonItems.push(product)
				})
			},
			deleteItem: (id: number) => {
				set((state) => {
					const index = state.comparisonItems.findIndex((el) => el.product_id === id)
					state.comparisonItems.splice(index, 1)
				})
			},
			clearItems: () => {
				set((state) => {
					state.comparisonItems = []
				})
			},
		})),
		{
			name: 'comparison-storage',
		},
	),
)
