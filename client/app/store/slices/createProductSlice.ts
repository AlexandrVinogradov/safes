import { ServerProductCardType } from '@/app/components/ProductCard/IProductCard'
import { StateCreator } from 'zustand'

export interface ProductSlice {
	products: ServerProductCardType[]
	fetchProducts: () => void
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
	products: [],
	fetchProducts: async () => {
		// const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
		const res = await fetch('http://localhost:5000/safes')
		// const res = await fetch('http://localhost:5000/users')

		set({ products: await res.json() })
	},
})
