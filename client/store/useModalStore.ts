import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
	isRequestCallModal: boolean
	isCallRequested: boolean

	isCutModal: boolean
	isCutModalInfoRead: boolean
}

type Actions = {
	setIsRequestCallModal: (isRequestCallModal: boolean) => void
	setIsCallRequested: (isRequestCallModal: boolean) => void

	setIsCutModal: (isRequestCallModal: boolean) => void
	setIsCutModalInfoRead: (isCutModalInfoRead: boolean) => void
}

export const useModalStore = create(
	immer<State & Actions>((set) => ({
		isRequestCallModal: false,
		setIsRequestCallModal: (isRequestCallModal: boolean) => {
			set({ isRequestCallModal })
			set({ isCallRequested: false })
		},

		isCallRequested: false,
		setIsCallRequested: (isCallRequested: boolean) => {
			set({ isCallRequested })
		},

		isCutModal: false,
		setIsCutModal: (isCutModal: boolean) => {
			set({ isCutModal })
		},
		isCutModalInfoRead: false,
		setIsCutModalInfoRead: (isCutModalInfoRead: boolean) => {
			set({ isCutModalInfoRead })
		},
	})),
)
