import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { ServerProductCardType, FilterDataType, ProductsType, ExtraValuesHandbook } from '../models/IProductStore'

type State = {
	products: ServerProductCardType[]
	selectedProduct: ServerProductCardType | null
	fetchProductsError: string | null
	filterData: FilterDataType
}

type Actions = {
	fetchProducts: (url: string) => Promise<ProductsType | ServerProductCardType>
	fetchExtraValuesHandbook: () => Promise<ExtraValuesHandbook[]>
	setFilterData: (paramId: 'price' | 'weight', value: [number, number]) => void
	initFilterData: (filterData: FilterDataType) => void
	resetFilter: () => void
}

const initialFilterData: FilterDataType = {
	price: {
		selectedDiapason: [0, 2000000],
		fullDiapason: [0, 2000000],
	},
	weight: {
		selectedDiapason: [0, 3000],
		fullDiapason: [0, 3000],
	},
}

export const useProductStore = create(
	immer<State & Actions>((set) => ({
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
					// set({ products: data })
				}

				return data
			} catch (error: any) {
				set({ fetchProductsError: error.message ?? '' })
			}
		},

		fetchExtraValuesHandbook: async () => {
			try {
				const response = await fetch(process.env.API_URL_EXTRA_VALUE as string)
				const data = await response.json()

				if (!response.ok) throw new Error(data.message)

				return data
			} catch (error: any) {}
		},

		filterData: initialFilterData,
		initFilterData: (filterData: FilterDataType) => {
			set((state) => {
				state.filterData = filterData
			})
		},
		setFilterData: (paramId: 'price' | 'weight', value: [number, number]) => {
			set((state) => {
				state.filterData[paramId].selectedDiapason = value
			})
		},
		resetFilter: () => {
			set((state) => {
				// FIXME why cant use initialFilterData?
				state.filterData = initialFilterData
				// state.filterData = {
				// 	price: {
				// 		selectedDiapason: [0, 1850000],
				// 		fullDiapason: [0, 1850000],
				// 	},
				// 	weight: {
				// 		selectedDiapason: [0, 500],
				// 		fullDiapason: [0, 500],
				// 	},
				// }
			})
		},
	})),
)