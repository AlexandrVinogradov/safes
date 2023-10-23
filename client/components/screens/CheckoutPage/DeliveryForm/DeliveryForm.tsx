import { RadioGroup } from '@/components/RadioGroup/RadioGroup'
import { useEffect, useState } from 'react'
import { SelectedTabType } from '../CheckoutPage'
import { Button } from '@/components/Button/Button'
import { LongArrowRightIcon } from '@/icons/LongArrowRightIcon'
import { s } from './styles'
import { useStateMachine } from 'little-state-machine'
import { updatePersonalForm } from '../PersonalForm/PersonalForm'

type PropsType = {
	setSelectedTab: (selectedTab: SelectedTabType) => void
}

export const DeliveryForm = (props: PropsType) => {
	const { setSelectedTab } = props

	const { actions, state }: any = useStateMachine({ updatePersonalForm })

	const [radioValue, setRadioValue] = useState(1)
	const radioData = [
		{
			value: 1,
			name: (
				<div className={s.radioItem}>
					Уточнить стоимость доставки и разгрузки товара с менеджером
					<div className={s.space} /> <p>0 ₽</p>
				</div>
			),
		},
		{
			value: 2,
			name: (
				<div className={s.radioItem}>
					Доставка по Москве при заказе от 15.000 ₽
					<div className={s.space} /> <p>0 ₽</p>
				</div>
			),
		},
		{
			value: 3,
			name: (
				<div className={s.radioItem}>
					Доставка по Москве при заказе до 15.000 ₽
					<div className={s.space} /> <p>600 ₽</p>
				</div>
			),
		},
		{
			value: 4,
			name: (
				<div className={s.radioItem}>
					Доставка до 5 км от МКАД
					<div className={s.space} /> <p>1 000 ₽</p>
				</div>
			),
		},
		{
			value: 5,
			name: (
				<div className={s.radioItem}>
					Доставка до 20 км от МКАД
					<div className={s.space} /> <p>1 300 ₽</p>
				</div>
			),
		},
		{
			value: 6,
			name: (
				<div className={s.radioItem}>
					Доставка до 35 км от МКАД
					<div className={s.space} /> <p>1 500 ₽</p>
				</div>
			),
		},
		{
			value: 7,
			name: (
				<div className={s.radioItem}>
					Доставка до 60 км от МКАД
					<div className={s.space} /> <p>3000 ₽</p>
				</div>
			),
		},
	]

	useEffect(() => {
		actions.updatePersonalForm({
			...state,
			delivery: radioData.find((el) => el.value === radioValue)?.value || '',
		})
	}, [radioValue])

	useEffect(() => {
		if (state.delivery) setRadioValue(state.delivery)
	}, [])

	const onSubmit = () => setSelectedTab('confirm')

	return (
		<form className={s.form} onSubmit={onSubmit}>
			<RadioGroup
				className={s.radioGroup}
				radioValue={radioValue}
				direction="vertical"
				setRadioValue={setRadioValue}
				data={radioData}
			/>

			<Button type="submit">
				Далее
				<LongArrowRightIcon className={s.submitButtonIcon} />
			</Button>
		</form>
	)
}
