import { Button } from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import { Input } from '@/components/Input/Input'
import Select from '@/components/Select/Select'
import { useModalStore } from '@/store/useModalStore'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { s } from './styles'

type FormType = {
	name: string
	phone: string
	isAgree: boolean
}

export const RequestCallForm = () => {
	const isOpen = useModalStore((state) => state.isRequestCallModal)
	const setIsCallRequested = useModalStore((state) => state.setIsCallRequested)

	const { handleSubmit, control, setFocus } = useForm<FormType>()

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

	useEffect(() => {
		if (!isOpen) return

		setFocus('name')
	}, [isOpen])

	const onSubmit = (data: FormType) => setIsCallRequested(true)

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				control={control}
				name="name"
				rules={{ required: true }}
				render={({ field: { onChange, ref }, fieldState: { error } }) => (
					<Input
						label="Ваше Имя"
						isRequired
						styleType="form"
						placeholder="Введите ваше имя"
						isError={!!error}
						onChange={onChange}
						inputRef={ref}
					/>
				)}
			/>

			<Controller
				control={control}
				name="phone"
				rules={{ required: true }}
				render={({ field: { onChange }, fieldState: { error } }) => (
					<Input
						label="Ваш телефон"
						isRequired
						styleType="form"
						placeholder="+7 ___ - __ - __"
						isError={!!error}
						onChange={onChange}
					/>
				)}
			/>

			<div>
				{/* TODO: to styles */}
				<p className="mb-[10px]">Время звонка</p>

				<div className={s.selects}>
					<Select defaultValue={callTimes[0].value} options={callTimes} />
					<Select defaultValue={callDays[4].value} options={callDays} />
				</div>
			</div>

			<Controller
				control={control}
				name="isAgree"
				rules={{ required: true }}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<Checkbox className={s.label} onChange={onChange} value={value} isError={!!error}>
						Даю согласие на обработку персональных данных
					</Checkbox>
				)}
			/>

			<Button type="submit" className={s.submitButton}>
				Отправить
			</Button>
		</form>
	)
}
