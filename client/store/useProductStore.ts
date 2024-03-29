import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { SelectedProductType, FilterDataType, ProductsType, ExtraValuesHandbook, FilterParamType } from '../models/IProductStore'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'

type State = {
	searchData: ProductsType | null
	searchValue: string
	products: ProductsType | null
	selectedProduct: SelectedProductType | null
	fetchProductsError: string | null
	filterData: FilterDataType
}

type Actions = {
	setSearchData: (searchValue: ProductsType | null) => void
	setSearchValue: (searchData: string) => void
	fetchProducts: (url: string, searchValue?: string) => Promise<ProductsType | SelectedProductType>
	fetchExtraValuesHandbook: () => Promise<ExtraValuesHandbook[]>
	setFilterData: (paramId: FilterParamType, value: [number, number]) => void
	initFilterData: (filterData: FilterDataType) => void
	resetFilter: () => void
}

const initialFilterData: FilterDataType = {
	price: {
		selectedDiapason: [0, 35000000],
		fullDiapason: [0, 35000000],
	},
	weight: {
		selectedDiapason: [0, 3000],
		fullDiapason: [0, 3000],
	},
	height: {
		selectedDiapason: [0, 3000],
		fullDiapason: [0, 3000],
	},
	width: {
		selectedDiapason: [0, 3000],
		fullDiapason: [0, 3000],
	},
	depth: {
		selectedDiapason: [0, 3000],
		fullDiapason: [0, 3000],
	},
}

export const useProductStore = create(
	immer<State & Actions>((set) => ({
		searchData: null,
		setSearchData: (searchData) => set({ searchData }),
		searchValue: '',
		setSearchValue: (searchValue) => set({ searchValue }),
		products: null,
		selectedProduct: null,
		fetchProductsError: null,
		fetchProducts: async (url, searchValue?: string) => {
			try {
				const response = await fetch(url)
				const data = await response.json()

				if (!response.ok) throw new Error(data.message)

				if (url.includes('selected?safeAlias=')) {
					set({ selectedProduct: data })
				} else {
					// set({ products: data })
				}

				if (searchValue) {
					set({ searchData: data })
					return
				}

				return data
			} catch (error: any) {
				set({ fetchProductsError: error.message ?? '' })
			}
		},

		fetchExtraValuesHandbook: async () => {
			try {
				const API_URL = getClientServerUrl('extra_value')
				const response = await fetch(API_URL)
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
		setFilterData: (paramId: FilterParamType, value: [number, number]) => {
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
