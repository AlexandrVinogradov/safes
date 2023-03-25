import { useAppStore } from '@/app/store/store'
import Image from 'next/image'
import { IconButton } from '../../components/IconButton/IconButton'
import { MainModal } from '../../components/Modal/MainModal'
import { CloseIcon } from '../../icons/CloseIcon'
import { RequestCallForm } from './RequestCallForm/RequestCallForm'
import { s } from './styles'

export const RequestCallModal = () => {
	const { isRequestCallModal, setIsRequestCallModal } = useAppStore()

	const handleClose = () => setIsRequestCallModal(false)

	return (
		<MainModal isOpen={isRequestCallModal} onClose={handleClose}>
			<div className={s.wrapper}>
				<IconButton onClick={handleClose} icon={<CloseIcon />} className={s.closeButton} />

				<Image className={s.bgImg} src="/semiShield.png" alt="Промет лого" width={222} height={535} />

				<div className={s.content}>
					<h2 className={s.title}>Заказ обратного звонка</h2>
					<p className={s.message}>К сожалению, мы сегодня уже не работаем. Перезвоним Вам завтра.</p>
					<RequestCallForm />
				</div>
			</div>
		</MainModal>
	)
}
