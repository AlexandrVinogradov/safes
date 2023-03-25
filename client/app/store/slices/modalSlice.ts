import { StateCreator } from 'zustand'

export interface ModalSliceType {
	isRequestCallModal: boolean
	setIsRequestCallModal: (isRequestCallModal: boolean) => void

	isCallRequested: boolean
	setIsCallRequested: (isRequestCallModal: boolean) => void
}

export const modalSlice: StateCreator<ModalSliceType> = (set) => ({
	isRequestCallModal: false,
	setIsRequestCallModal: (isRequestCallModal: boolean) => {
		set({ isRequestCallModal: isRequestCallModal })
		set({ isCallRequested: false })
	},

	isCallRequested: false,
	setIsCallRequested: (isCallRequested: boolean) => {
		set({ isCallRequested: isCallRequested })
	},
})
