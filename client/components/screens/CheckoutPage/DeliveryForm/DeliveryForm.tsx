import { RadioGroup } from '@/components/RadioGroup/RadioGroup'
import { useState } from 'react'
import { SelectedTabType } from '../CheckoutPage'
import { Button } from '@/components/Button/Button'
import { LongArrowRightIcon } from '@/icons/LongArrowRightIcon'
import { s } from './styles'

type PropsType = {
	setSelectedTab: (selectedTab: SelectedTabType) => void
}
export const DeliveryForm = (props: PropsType) => {
	const { setSelectedTab } = props

	const [radioValue, setRadioValue] = useState(1)
	const radioData = [
		{
			value: 1,
			name: (
				<div className={s.radioItem}>
					Уточнить стоимость доставки и разгрузки товара с менеджером
					<div className={s.space} /> <div>0 ₽</div>
				</div>
			),
		},
		{
			value: 2,
			name: (
				<div className={s.radioItem}>
					Доставка по Москве при заказе от 15.000 ₽
					<div className={s.space} /> <div>0 ₽</div>
				</div>
			),
		},
		{
			value: 3,
			name: (
				<div className={s.radioItem}>
					Доставка по Москве при заказе до 15.000 ₽
					<div className={s.space} /> <div>600 ₽</div>
				</div>
			),
		},
		{
			value: 4,
			name: (
				<div className={s.radioItem}>
					Доставка до 5 км от МКАД
					<div className={s.space} /> <div>1 000 ₽</div>
				</div>
			),
		},
		{
			value: 5,
			name: (
				<div className={s.radioItem}>
					Доставка до 20 км от МКАД
					<div className={s.space} /> <div>1 300 ₽</div>
				</div>
			),
		},
		{
			value: 6,
			name: (
				<div className={s.radioItem}>
					Доставка до 35 км от МКАД
					<div className={s.space} /> <div>1 500 ₽</div>
				</div>
			),
		},
		{
			value: 7,
			name: (
				<div className={s.radioItem}>
					Доставка до 60 км от МКАД
					<div className={s.space} /> <div>3000 ₽</div>
				</div>
			),
		},
	]

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
