import { useEffect, useState } from 'react'
import { Input } from '@/components/Input/Input'
import { LongArrowRightIcon } from '@/icons/LongArrowRightIcon'
import { Textarea } from '@/components/Textarea/Textarea'
import Checkbox from '@/components/Checkbox/Checkbox'
import { Controller, useForm } from 'react-hook-form'
import { SelectedTabType } from '../CheckoutPage'
import { Button } from '@/components/Button/Button'
import { RadioGroup } from '@/components/RadioGroup/RadioGroup'
import { CustomUpload } from '@/components/Upload/Upload'
import { s } from './styles'
import { UploadFile } from 'antd/es/upload/interface'
import { useStateMachine } from 'little-state-machine'
import clsx from 'clsx'

type FormType = {
	name: string
	email: string
	address: string
	phone: string
	comment: string
	isAgree: boolean
}

type PropsType = {
	setSelectedTab: (selectedTab: SelectedTabType) => void
	setIsRequiredFieldsAreFilled: (isRequiredFieldsAreFilled: boolean) => void
}

export const updatePersonalForm = (state: any, payload: any) => {
	return { ...payload }
}

export const PersonalForm = (props: PropsType) => {
	const { setSelectedTab, setIsRequiredFieldsAreFilled } = props
	const defaultValues = {
		name: '',
		email: '',
		address: '',
		phone: '',
		comment: '',
		isAgree: false,
	}
	const { handleSubmit, control, setFocus, setValue, watch, getValues } = useForm<FormType>({ defaultValues })
	const [radioValue, setRadioValue] = useState(1)
	const radioData = [
		{ value: 1, name: 'Я физическое лицо' },
		{ value: 2, name: 'Я юридическое лицо' },
	]
	const [fileList, setFileList] = useState<UploadFile<any>[]>([])
	const { actions, state }: any = useStateMachine({ updatePersonalForm })

	const nameWatch = watch('name')
	const emailWatch = watch('email')
	const addressWatch = watch('address')
	const phoneWatch = watch('phone')
	const commentWatch = watch('comment')
	const isAgreeWatch = watch('isAgree')

	useEffect(() => {
		actions.updatePersonalForm({
			...state,
			person: radioValue,
			fileList,
			...getValues(),
		})

		if (nameWatch && phoneWatch && isAgreeWatch) {
			setIsRequiredFieldsAreFilled(false)
		} else {
			setIsRequiredFieldsAreFilled(true)
		}
	}, [nameWatch, emailWatch, addressWatch, phoneWatch, commentWatch, isAgreeWatch, radioValue, fileList])

	useEffect(() => {
		setFocus('name')

		if (state.name) setValue('name', state.name)
		if (state.email) setValue('email', state.email)
		if (state.address) setValue('address', state.address)
		if (state.phone) setValue('phone', state.phone)
		if (state.comment) setValue('comment', state.comment)
		if (state.isAgree) setValue('isAgree', state.isAgree)
		if (state.person) setRadioValue(state.person)
		if (state.fileList) setFileList(state.fileList)
	}, [])

	const onSubmit = () => setSelectedTab('delivery')

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<RadioGroup className={clsx(s.pb, s.radio)} radioValue={radioValue} setRadioValue={setRadioValue} data={radioData} />

			<Controller
				control={control}
				name="name"
				rules={{ required: true }}
				render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
					<Input
						value={value}
						styleType="form"
						isError={!!error}
						onChange={onChange}
						inputRef={ref}
						label="Ваше Имя"
						isRequired
					/>
				)}
			/>
			<Controller
				control={control}
				name="phone"
				rules={{ required: true }}
				render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
					<Input styleType="form" isError={!!error} onChange={onChange} value={value} inputRef={ref} label="Телефон" isRequired />
				)}
			/>
			<Controller
				control={control}
				name="email"
				render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
					<Input styleType="form" isError={!!error} onChange={onChange} value={value} inputRef={ref} label="Ваш e-mail" />
				)}
			/>
			<Controller
				control={control}
				name="address"
				render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
					<Input
						styleType="form"
						isError={!!error}
						onChange={onChange}
						value={value}
						inputRef={ref}
						label="Город/Улица/Номер дома"
					/>
				)}
			/>

			{radioValue === 2 && <CustomUpload className={clsx(s.upload, s.pb)} fileList={fileList} setFileList={setFileList} />}

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
						placeholder="Любая дополнительная информация для нас..."
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

			<Button type="submit">
				Далее
				<LongArrowRightIcon className={s.submitButtonIcon} />
			</Button>
		</form>
	)
}
