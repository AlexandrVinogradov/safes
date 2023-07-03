import { s } from './styles'

type PropsType = {
	value: number
	onChange: (value: 'increase' | 'decrease') => void
}

export const ClickInput = (props: PropsType) => {
	const { value, onChange } = props

	const handleIncrease = () => onChange('increase')
	const handleDecrease = () => onChange('decrease')

	return (
		<div className={s.input}>
			<button onClick={handleDecrease} className={s.button}>-</button>
			<p className={s.value}>{value}</p>
			<button onClick={handleIncrease} className={s.button}>+</button>
		</div>
	)
}
