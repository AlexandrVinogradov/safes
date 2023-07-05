import { Radio, RadioChangeEvent, Space } from 'antd'
import { InputHTMLAttributes, ReactNode } from 'react'
import { s } from './styles'

type PropsType = {
	radioValue: number
	setRadioValue: (radioValue: number) => void
	data: { value: number; name: string | ReactNode }[]
	className?: string
	direction?: 'horizontal' | 'vertical'
}

export const RadioGroup = (props: PropsType & InputHTMLAttributes<HTMLInputElement>) => {
	const { radioValue, setRadioValue, data, direction = 'horizontal', className } = props

	const onChange = (e: RadioChangeEvent) => setRadioValue(e.target.value)

	return (
		<Radio.Group className={className} onChange={onChange} value={radioValue}>
			<Space direction={direction}>
				{data.map((radio) => (
					<Radio className={s.radio} key={radio.value} value={radio.value}>
						{radio.name}
					</Radio>
				))}
			</Space>
		</Radio.Group>
	)
}
