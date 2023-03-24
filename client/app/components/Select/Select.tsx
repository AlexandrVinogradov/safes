import { Select } from 'antd'

type PropsType = {
	defaultValue: string
	options: { value: string; label: string }[]
}

const CustomSelect = (props: PropsType) => {
	const { options, ...otherProps } = props

	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}

	return <Select style={{ width: 120 }} onChange={handleChange} options={options} {...otherProps} />
}

export default CustomSelect