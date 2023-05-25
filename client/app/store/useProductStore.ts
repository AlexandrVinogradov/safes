import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { ServerProductCardType, CategoriesType, FilterDataType } from '../models/IProductStore'

type State = {
	baseUrl: string
	products: ServerProductCardType[]
	selectedProduct: ServerProductCardType | null
	fetchProductsError: string | null
	filterData: FilterDataType
	categories: CategoriesType[]
}

type Actions = {
	fetchProducts: (url: string) => Promise<void>
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
		fetchProductsError: null,
		fetchProducts: async (url) => {
			try {
				const response = await fetch(url)
				const data = await response.json()

				if (!response.ok) throw new Error(data.message)

				if (url.includes('selected?safeAlias=')) {
					set({ selectedProduct: data })
				} else {
					set({ products: data })
				}
			} catch (error: any) {
				set({ fetchProductsError: error.message ?? '' })
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
			console.log(res)

			set({ categories: await res.json() })
		},
	})),
)
