import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { BasketItemType } from '@/models/IBasketStore'

type State = {
	basketItems: BasketItemType[]
}

type Actions = {
	addBasketItem: (product: Omit<BasketItemType, 'count'>) => void
}

export const useBasketStore = create(
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
	})),
)
