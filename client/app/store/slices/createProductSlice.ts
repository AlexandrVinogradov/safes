import { ServerProductCardType } from '@/app/components/ProductCard/IProductCard'
import { StateCreator } from 'zustand'

export interface ProductSlice {
	products: ServerProductCardType[]
	filterQueries: { weight?: string } | null
	setFilterQueries: (filterQueries: { weight?: string }) => void
	fetchProducts: () => void
}

export const createProductSlice: StateCreator<ProductSlice> = (set, get) => ({
	products: [],
	filterQueries: null,
	setFilterQueries: (filterQueries: { weight?: string }) => {
		set({ filterQueries })
	},
	fetchProducts: async () => {
		// const res = await fetch(`http://localhost:5000/safes?weight=${get().filterQueries.weight}`)
		const res = await fetch(`http://localhost:5000/safes`)

		set({ products: await res.json() })
	},
})
