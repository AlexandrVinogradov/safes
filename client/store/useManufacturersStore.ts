import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { ManufacturerType } from '@/models/IManufacturersStore'

type State = {
	manufacturers: ManufacturerType[]
}

type Actions = {
	fetchManufacturers: (url: string) => Promise<ManufacturerType[] | ManufacturerType>
}

export const useManufacturersStore = create(
	immer<State & Actions>((set) => ({
		manufacturers: [],
		fetchManufacturers: async (url: string) => {
			try {
				const response = await fetch(url)
				const data = await response.json()

				set({ manufacturers: data })
				return data
			} catch {}
		},
	})),
)
