import Image from 'next/image'
import { Button } from '../components/Button/Button'
import Checkbox from '../components/Checkbox/Checkbox'
import { IconButton } from '../components/IconButton/IconButton'
import { Input } from '../components/Input/Input'
import { MainModal } from '../components/Modal/MainModal'
import Select from '../components/Select/Select'
import { CloseIcon } from '../icons/CloseIcon'
import { s } from './styles'

type PropsType = {
	isOpen: boolean
	handleCloseRequestCallModal: () => void
}

export const RequestCallModal = (props: PropsType) => {
	const { isOpen, handleCloseRequestCallModal } = props

	const callTimes = [
		{ value: '09:00', label: '09:00' },
		{ value: '10:00', label: '10:00' },
		{ value: '11:00', label: '11:00' },
		{ value: '12:00', label: '12:00' },
	]
	const callDays = [
		{ value: 'monday', label: 'Понедельник' },
		{ value: 'tuesday', label: 'Вторник' },
		{ value: 'wednesday', label: 'Среда' },
		{ value: 'thursday', label: 'Четверг' },
		{ value: 'friday', label: 'Пятница' },
		{ value: 'saturday', label: 'Суббота' },
		{ value: 'sunday', label: 'Воскресенье' },
	]

	const handleClose = () => handleCloseRequestCallModal()

	return (
		<MainModal isOpen={isOpen} onClose={handleClose}>
			<div className={s.wrapper}>
				<IconButton onClick={handleClose} icon={<CloseIcon />} className={s.closeButton} />

				<Image className={s.bgImg} src="/semiShield.png" alt="Промет лого" width={222} height={535} />

				<div className={s.content}>
					<h2 className={s.title}>Заказ обратного звонка</h2>
					<p className={s.message}>К сожалению, мы сегодня уже не работаем. Перезвоним Вам завтра.</p>

					<form className={s.form}>
						<label className={s.label}>
							<p className={s.InputName}>
								Ваше имя <span className={s.required}>*</span>
							</p>
							<Input inputType="form" placeholder="Введите ваше имя" />
						</label>

						<label className={s.label}>
							<p className={s.InputName}>
								Ваш телефон <span className={s.required}>*</span>
							</p>
							<Input inputType="form" placeholder="+7 ___ - __ - __" />
						</label>

						<div className={s.label}>
							<p className={s.InputName}>Время звонка</p>

							<div className={s.selects}>
								<Select defaultValue={callTimes[0].value} options={callTimes} />
								<Select defaultValue={callDays[4].value} options={callDays} />
							</div>
						</div>

						<Checkbox className={s.label}>Даю согласие на обработку персональных данных</Checkbox>

						<Button className={s.submitButton}>Отправить</Button>
					</form>
				</div>
			</div>
		</MainModal>
	)
}
