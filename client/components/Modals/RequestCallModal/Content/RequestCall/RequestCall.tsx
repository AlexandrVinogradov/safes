import { RequestCallForm } from './RequestCallForm/RequestCallForm'
import { commonStyles } from '../commonStyles'
import { useEffect, useState } from 'react'

export const RequestCall = () => {
	const [isNight, setIsNight] = useState(false)

	useEffect(() => {
		const checkTime = () => {
			const now = new Date()
			const moscowTime = now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' })
			const hours = new Date(moscowTime).getHours()

			if (hours >= 21 || hours < 8) {
				setIsNight(true)
			}
		}

		checkTime()
	}, [])

	return (
		<div className={commonStyles.content}>
			<h3 className={commonStyles.title}>Заказ обратного звонка</h3>

			{isNight && <p className={commonStyles.message}>К сожалению, мы сегодня уже не работаем. Перезвоним Вам завтра.</p>}

			<RequestCallForm />
		</div>
	)
}
