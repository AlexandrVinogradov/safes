import { useModalStore } from '@/store/useModalStore'
import { MainModal } from '@/components/Modal/MainModal/MainModal'
import { CutModalInfo } from './CutModalInfo/CutModalInfo'
import { CutModalForm } from './CutModalForm/CutModalForm'

export const CutModal = () => {
	const isCutModal = useModalStore((state) => state.isCutModal)
	const setIsCutModal = useModalStore((state) => state.setIsCutModal)
	const setIsCutModalInfoRead = useModalStore((state) => state.setIsCutModalInfoRead)

	const handleClose = () => {
		setIsCutModal(false)
		setIsCutModalInfoRead(false)
	}

	return (
		<MainModal isOpen={isCutModal} onClose={handleClose}>
			<CutModalInfo />
			<CutModalForm />
		</MainModal>
	)
}
