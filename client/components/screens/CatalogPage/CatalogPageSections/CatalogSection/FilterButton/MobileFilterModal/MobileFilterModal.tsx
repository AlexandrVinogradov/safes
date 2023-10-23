import { Filter } from '@/components/Filter/Filter'
import { FullScreenModal } from '@/components/Modal/FullScreenModal/FullScreenModal'
import { SimplManufactureType } from '@/models/IManufacturersStore'
import { ExtraValuesHandbook } from '@/models/IProductStore'
import { useModalStore } from '@/store/useModalStore'
import { s } from './styles'

type PropsType = {
	extraValuesHandbook: ExtraValuesHandbook[]
	simpleManufacturers: SimplManufactureType[] | null
}

export const MobileFilterModal = (props: PropsType) => {
	const { extraValuesHandbook, simpleManufacturers } = props
	const isMobileFilterModal = useModalStore((state) => state.isMobileFilterModal)
	const setIsMobileFilterModal = useModalStore((state) => state.setIsMobileFilterModal)

	const onClose = () => setIsMobileFilterModal(false)
	return (
		<FullScreenModal isOpen={isMobileFilterModal} onClose={onClose} styles={s.modal} overlayStyles={s.overlay}>
			<Filter extraValuesHandbook={extraValuesHandbook} simpleManufacturers={simpleManufacturers} />
		</FullScreenModal>
	)
}
