import { useStateMachine } from 'little-state-machine'
import { s } from './styles'
import { useEffect, useState } from 'react'

export const PersonSummary = () => {
	const { state }: any = useStateMachine()

	const [summary, setSummary] = useState({
		name: '',
		email: '',
		address: '',
		phone: '',
		delivery: '',
	})

	useEffect(() => {
		if (state) setSummary(state)
	}, [])

	return (
		<div className={s.summary}>
			<div className={s.personInfo}>
				<h4 className={s.title}>Личные данные</h4>
				<p>
					Ваше имя: <span className={s.personValue}>{summary.name}</span>
				</p>
				<p>
					Ваш e-mail: <span className={s.personValue}>{summary.email}</span>
				</p>
				<p>
					Город/Улица/Номер дома: <span className={s.personValue}>{summary.address}</span>
				</p>
				<p>
					Ваш телефон: <span className={s.personValue}>{summary.phone}</span>
				</p>
			</div>
			<div className={s.deliveryInfo}>
				<h4 className={s.title}>Способ доставки</h4>

				<p className={s.personValue}>{summary.delivery}</p>
			</div>
		</div>
	)
}
