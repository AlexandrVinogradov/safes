import { useModalStore } from '@/store/useModalStore'
import { MainModal } from '../../Modal/MainModal/MainModal'
import { CallRequested } from './Content/CallRequested/CallRequested'
import { RequestCall } from './Content/RequestCall/RequestCall'

export const RequestCallModal = () => {
	const isRequestCallModal = useModalStore((state) => state.isRequestCallModal)
	const setIsRequestCallModal = useModalStore((state) => state.setIsRequestCallModal)
	const isCallRequested = useModalStore((state) => state.isCallRequested)

	const handleClose = () => setIsRequestCallModal(false)

	return (
		<MainModal styles='h-[655px] pb-[30px]' isOpen={isRequestCallModal} onClose={handleClose}>
			{!isCallRequested ? <RequestCall /> : <CallRequested />}
		</MainModal>
	)
}
