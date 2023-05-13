import { create } from 'zustand'
// import { createProductSlice, ProductSlice } from './slices/createProductSlice'
import { modalSlice, ModalSliceType } from './slices/modalSlice'

type StoreState = ModalSliceType

export const useAppStore = create<StoreState>()((...a) => ({
	// FIXME: remove this file?
	// ...createProductSlice(...a),
	...modalSlice(...a),
}))
