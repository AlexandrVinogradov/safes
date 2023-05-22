import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { ServerProductCardType, CategoriesType, FilterDataType } from '../models/IProductStore'

type State = {
	baseUrl: string
	products: ServerProductCardType[]
	selectedProduct: ServerProductCardType | null
	filterData: FilterDataType
	categories: CategoriesType[]
}

type Actions = {
	fetchProducts: (url: string) => void
	setFilterData: (paramId: 'price' | 'weight', value: [number, number]) => void
	resetFilter: () => void
	fetchCategories: (url: string) => void
}

const initialFilterData: FilterDataType = {
	price: {
		selectedDiapason: [40000, 1850000],
		fullDiapason: [0, 1850000],
	},
	weight: {
		selectedDiapason: [10, 500],
		fullDiapason: [0, 500],
	},
}

export const useProductStore = create(
	immer<State & Actions>((set) => ({
		baseUrl: 'http://localhost:5000/safes',
		products: [],
		selectedProduct: null,
		fetchProducts: async (url: string) => {
			// const res = await fetch(`http://localhost:5000/safes?weight=${get().filterQueries.weight}`)
			// const res = await fetch(`http://localhost:5000/safes`)
			const res = await fetch(url)

			if (url.includes('selected?safeAlias=')) {
				set({ selectedProduct: await res.json() })
			} else {
				set({ products: await res.json() })
			}
		},

		filterData: initialFilterData,
		setFilterData: (paramId: 'price' | 'weight', value: [number, number]) => {
			set((state) => {
				state.filterData[paramId].selectedDiapason = value
			})
		},
		resetFilter: () => {
			set((state) => {
				state.filterData = initialFilterData
			})
		},

		categories: [],
		fetchCategories: async (url: string) => {
			const res = await fetch(url)

			set({ categories: await res.json() })
		},
	})),
)
