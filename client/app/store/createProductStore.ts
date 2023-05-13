import { ServerProductCardType } from '@/app/components/ProductCard/IProductCard'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'

type FilterDataType = {
	price: {
		selectedDiapason: [number, number]
		fullDiapason: [number, number]
	}
	weight: {
		selectedDiapason: [number, number]
		fullDiapason: [number, number]
	}
}

type State = {
	products: ServerProductCardType[]
	filterData: FilterDataType
}

type Actions = {
	fetchProducts: (url: string) => void
	setFilterData: (paramId: 'price' | 'weight', value: [number, number]) => void
	resetFilter: () => void
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
		products: [],
		fetchProducts: async (url: string) => {
			// const res = await fetch(`http://localhost:5000/safes?weight=${get().filterQueries.weight}`)
			// const res = await fetch(`http://localhost:5000/safes`)
			const res = await fetch(url)

			set({ products: await res.json() })
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
	})),
)
