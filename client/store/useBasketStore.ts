import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { BasketItemType } from '@/models/IBasketStore'

type State = {
	basketItems: BasketItemType[]
}

type Actions = {
	addBasketItem: (product: Omit<BasketItemType, 'count'>) => void
	changeItemCount: (id: number, operation: 'increase' | 'decrease') => void
	deleteItemToggle: (id: number, operation: 'delete' | 'return') => void
	deleteAllItems: () => void
}

export const useBasketStore = create(
	immer<State & Actions>((set) => ({
		basketItems: [
			// {
			// 	id: 23,
			// 	image: 'valberg-karat-20-11__1___1_.jpg',
			// 	name: 'Сейф VALBERG КАРАТ-20',
			// 	price: 16600,
			// 	oldPrice: 23000,
			// 	count: 1,
			// 	code: '12414',
			// 	isDeleted: false,
			// },
			// {
			// 	id: 24,
			// 	image: 'valberg-karat-25-11__1_.jpg',
			// 	name: 'Сейф VALBERG КАРАТ-25',
			// 	price: 10000,
			// 	oldPrice: 20000,
			// 	count: 5,
			// 	code: '12414',
			// 	isDeleted: true,
			// },
		],
		addBasketItem: (product: Omit<BasketItemType, 'count'>) => {
			set((state) => {
				const { basketItems } = state
				const existProduct = basketItems.find((el) => el.id === product.id)

				if (!existProduct) {
					basketItems.push({ ...product, count: 1 })
				} else {
					existProduct.count = existProduct.count + 1
				}
			})
		},
		changeItemCount: (id: number, operation: 'increase' | 'decrease') => {
			set((state) => {
				const { basketItems } = state
				const selectedProduct = basketItems.find((el) => el.id === id)

				if (!selectedProduct) return

				if (operation === 'increase') selectedProduct.count++
				if (operation === 'decrease' && selectedProduct.count > 1) selectedProduct.count--
			})
		},
		deleteItemToggle: (id: number, operation: 'delete' | 'return') => {
			set((state) => {
				const selectedItem = state.basketItems.find((item) => item.id === id)
				if (!selectedItem) return

				if (operation === 'delete') selectedItem.isDeleted = true
				if (operation === 'return') selectedItem.isDeleted = false
			})
		},
		deleteAllItems: () => {
			set((state) => {
				state.basketItems.forEach((item) => (item.isDeleted = true))
			})
		},
	})),
)
