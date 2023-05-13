import Slider from 'antd/es/slider'

type PropsType = {
	defaultValue: [number, number]
	min: number
	max: number
	onChange: (value: [number, number]) => void
	onAfterChange: (value: [number, number]) => void
	value: [number, number]
}

export const ValueSlider = (props: PropsType) => {
	return <Slider range {...props} />
}
