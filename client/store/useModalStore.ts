import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
	isRequestCallModal: boolean
	isCallRequested: boolean

	isCutModal: boolean
}

type Actions = {
	setIsRequestCallModal: (isRequestCallModal: boolean) => void
	setIsCallRequested: (isRequestCallModal: boolean) => void

	setIsCutModal: (isRequestCallModal: boolean) => void
}

export const useModalStore = create(
	immer<State & Actions>((set) => ({
		isRequestCallModal: false,
		setIsRequestCallModal: (isRequestCallModal: boolean) => {
			set({ isRequestCallModal: isRequestCallModal })
			set({ isCallRequested: false })
		},

		isCallRequested: false,
		setIsCallRequested: (isCallRequested: boolean) => {
			set({ isCallRequested: isCallRequested })
		},

		isCutModal: true,
		setIsCutModal: (isCutModal: boolean) => {
			set({ isCutModal: isCutModal })
		},
	})),
)
