import { Button } from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import { Input } from '@/components/Input/Input'
import { Textarea } from '@/components/Textarea/Textarea'
import { useModalStore } from '@/store/useModalStore'
import { Controller, useForm } from 'react-hook-form'
import { s } from './styles'
import { useEffect } from 'react'

type FormType = {
	name: string
	phone: string
	email: string
	link: string
	comment: string
	isAgree: boolean
}

export const CutModalForm = () => {
	const isCutModalInfoRead = useModalStore((state) => state.isCutModalInfoRead)
	const setIsCutModal = useModalStore((state) => state.setIsCutModal)

	const { handleSubmit, control, setFocus } = useForm<FormType>()

	useEffect(() => {
		if (!isCutModalInfoRead) return
		setFocus('name')
	}, [isCutModalInfoRead])

	if (!isCutModalInfoRead) return null

	const onSubmit = (data: FormType) => {
		console.log(data)
		setIsCutModal(false)
	}

	return (
		<div className={s.wrapper}>
			<h3 className={s.title}>Нашли дешевле?</h3>
			<p className={s.message}>Если нашли товар дешевле на другом сайте, отправьте нам ссылку и мы сделаем Вам скидку.</p>
			<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name="name"
					rules={{ required: true }}
					render={({ field: { onChange, ref }, fieldState: { error } }) => (
						<Input
							className={s.input}
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
					render={({ field: { onChange, ref }, fieldState: { error } }) => (
						<Input
							label="Ваш телефон"
							placeholder="+7 ___ - __ - __"
							isRequired
							styleType="form"
							isError={!!error}
							onChange={onChange}
							inputRef={ref}
						/>
					)}
				/>
				<Controller
					control={control}
					name="email"
					rules={{ required: true }}
					render={({ field: { onChange, ref }, fieldState: { error } }) => (
						<Input
							label="Ваш email"
							placeholder="E-mail"
							isRequired
							styleType="form"
							isError={!!error}
							onChange={onChange}
							inputRef={ref}
						/>
					)}
				/>
				<Controller
					control={control}
					name="link"
					rules={{ required: true }}
					render={({ field: { onChange, ref }, fieldState: { error } }) => (
						<Input
							label="Ссылка на товар на другом сайте"
							placeholder="http://"
							isRequired
							styleType="form"
							isError={!!error}
							onChange={onChange}
							inputRef={ref}
						/>
					)}
				/>
				<Controller
					control={control}
					name="comment"
					render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
						<Textarea
							value={value}
							isError={!!error}
							onChange={onChange}
							inputRef={ref}
							label="Комментарий"
							placeholder="Текст комментария"
						/>
					)}
				/>
				<Controller
					control={control}
					name="isAgree"
					rules={{ required: true }}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<Checkbox className={s.checkbox} onChange={onChange} value={value} isError={!!error}>
							Даю согласие на обработку персональных данных
						</Checkbox>
					)}
				/>

				<div className={s.buttonWrapper}>
					<Button type="submit">Отправить</Button>
				</div>
			</form>
		</div>
	)
}
