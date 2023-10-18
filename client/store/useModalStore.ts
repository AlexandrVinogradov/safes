import { scrollToggle } from '@/helpers/scrollToggle'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
	isRequestCallModal: boolean
	isCallRequested: boolean

	isCutModal: boolean
	isCutModalInfoRead: boolean

	isMobileMenuModal: boolean
}

type Actions = {
	setIsRequestCallModal: (isRequestCallModal: boolean) => void
	setIsCallRequested: (isRequestCallModal: boolean) => void

	setIsCutModal: (isRequestCallModal: boolean) => void
	setIsCutModalInfoRead: (isCutModalInfoRead: boolean) => void

	setIsMobileMenuModal: (isMobileMenuModal: boolean) => void
}

export const useModalStore = create(
	immer<State & Actions>((set) => ({
		isRequestCallModal: false,
		setIsRequestCallModal: (isRequestCallModal: boolean) => {
			set({ isRequestCallModal })
			set({ isCallRequested: false })

			scrollToggle(isRequestCallModal)

		},

		isCallRequested: false,
		setIsCallRequested: (isCallRequested: boolean) => {
			set({ isCallRequested })

			scrollToggle(isCallRequested)
		},

		isCutModal: false,
		setIsCutModal: (isCutModal: boolean) => {
			set({ isCutModal })

			scrollToggle(isCutModal)
		},

		isCutModalInfoRead: false,
		setIsCutModalInfoRead: (isCutModalInfoRead: boolean) => {
			set({ isCutModalInfoRead })

			scrollToggle(isCutModalInfoRead)
		},

		isMobileMenuModal: false,
		setIsMobileMenuModal: (isMobileMenuModal: boolean) => {
			set({ isMobileMenuModal })

			scrollToggle(isMobileMenuModal)
		},
	})),
)
