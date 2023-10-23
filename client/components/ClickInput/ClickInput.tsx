import clsx from 'clsx'
import { s } from './styles'

type PropsType = {
	value: number
	onChange: (value: 'increase' | 'decrease') => void
	className?: string
}

export const ClickInput = (props: PropsType) => {
	const { value, onChange, className } = props

	const handleIncrease = () => onChange('increase')
	const handleDecrease = () => onChange('decrease')

	return (
		<div className={clsx(s.input, className)}>
			<button onClick={handleDecrease} className={s.button}>
				-
			</button>
			<p className={s.value}>{value}</p>
			<button onClick={handleIncrease} className={s.button}>
				+
			</button>
		</div>
	)
}
