import { useAppStore } from '@/app/store/store'
import { MainModal } from '../../components/Modal/MainModal/MainModal'
import { CallRequested } from './Content/CallRequested/CallRequested'
import { RequestCall } from './Content/RequestCall/RequestCall'

export const RequestCallModal = () => {
	const { isRequestCallModal, setIsRequestCallModal, isCallRequested } = useAppStore()

	const handleClose = () => setIsRequestCallModal(false)

	return (
		<MainModal isOpen={isRequestCallModal} onClose={handleClose}>
			{!isCallRequested ? <RequestCall /> : <CallRequested />}
		</MainModal>
	)
}
