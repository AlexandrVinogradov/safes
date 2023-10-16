import { MobileModal } from '@/components/Modal/MobileModal/MobileModal'
import { useModalStore } from '@/store/useModalStore'

export const MobileMenuModal = () => {
	const isMobileMenuModal = useModalStore((state) => state.isMobileMenuModal)
	const setIsMobileMenuModal = useModalStore((state) => state.setIsMobileMenuModal)

	const handleClose = () => setIsMobileMenuModal(false)
	return (
		<MobileModal  isOpen={isMobileMenuModal} onClose={handleClose}>
			<div>lol</div>
		</MobileModal>
	)
}
