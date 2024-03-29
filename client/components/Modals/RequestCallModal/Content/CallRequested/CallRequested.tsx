import { Button } from '@/components/Button/Button'
import { useModalStore } from '@/store/useModalStore'
import clsx from 'clsx'
import { commonStyles } from '../commonStyles'
import { s } from './styles'

export const CallRequested = () => {
	const setIsRequestCallModal = useModalStore((state) => state.setIsRequestCallModal)

	const handleClose = () => setIsRequestCallModal(false)

	return (
		<div className={commonStyles.content}>
			<h3 className={clsx(commonStyles.title, s.title)}>Спасибо!</h3>
			<p className={commonStyles.message}>Мы перезвоним Вам в указанное время</p>
			<Button className={s.button} onClick={handleClose}>
				Закрыть
			</Button>
		</div>
	)
}
