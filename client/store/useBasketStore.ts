import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { BasketItemType } from '@/models/IBasketStore'
import { persist } from 'zustand/middleware'

type State = {
	basketItems: BasketItemType[]
}

type Actions = {
	addBasketItem: (product: Omit<BasketItemType, 'count'>) => void
	changeItemCount: (id: number, operation: 'increase' | 'decrease') => void
	deleteItemToggle: (id: number, operation: 'delete' | 'return') => void
	deleteAllItems: () => void
	fullDeleteItems: () => void
	clearItems: () => void
}

export const useBasketStore = create(
	persist(
		immer<State & Actions>((set) => ({
			basketItems: [],
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
			fullDeleteItems: () => {
				set((state) => {
					state.basketItems = state.basketItems.filter((item) => !item.isDeleted)
				})
			},
			clearItems: () => {
				set((state) => {
					state.basketItems = []
				})
			},
		})),
		{
			name: 'basket-storage',
		},
	),
)
