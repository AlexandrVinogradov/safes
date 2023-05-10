import { create } from 'zustand'
import { createProductSlice, ProductSlice } from './slices/createProductSlice'
import { modalSlice, ModalSliceType } from './slices/modalSlice'

type StoreState = ProductSlice & ModalSliceType

export const useAppStore = create<StoreState>()((...a) => ({
	...createProductSlice(...a),
	...modalSlice(...a),
}))
