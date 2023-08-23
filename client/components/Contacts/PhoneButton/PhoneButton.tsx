import { RequestCallModal } from '@/components/Modals/RequestCallModal/RequestCallModal'
import { PhoneIcon } from '@/icons/PhoneIcon'
import { useModalStore } from '@/store/useModalStore'

export const PhoneButton = () => {
	const setIsRequestCallModal = useModalStore((state) => state.setIsRequestCallModal)

	const handleOpenRequestCallModal = () => setIsRequestCallModal(true)

	return (
		<>
			<RequestCallModal />

			<button onClick={handleOpenRequestCallModal}>
				<PhoneIcon />
			</button>
		</>
	)
}
