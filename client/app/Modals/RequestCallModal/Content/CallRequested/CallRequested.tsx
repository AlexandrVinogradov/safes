import { Button } from '@/app/components/Button/Button'
import { useAppStore } from '@/app/store/store'
import clsx from 'clsx'
import { commonStyles } from '../commonStyles'
import { s } from './styles'

export const CallRequested = () => {
	const { setIsRequestCallModal } = useAppStore()

	const handleClose = () => setIsRequestCallModal(false)

	return (
		<div className={commonStyles.content}>
			<h3 className={clsx(commonStyles.title, s.title)}>Спасибо!</h3>
			<p className={commonStyles.message}>Мы перезвоним Вам в указанное время</p>
			<Button onClick={handleClose}>Закрыть</Button>
		</div>
	)
}
