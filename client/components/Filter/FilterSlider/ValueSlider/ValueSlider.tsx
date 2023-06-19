import Slider from 'antd/es/slider'

export type ValueSliderPropsType = {
	defaultValue: [number, number]
	min: number
	max: number
	onChange: (value: [number, number]) => void
	onAfterChange: (value: [number, number]) => void
	value: [number, number]
}

export const ValueSlider = (props: ValueSliderPropsType) => {
	return <Slider range {...props} />
}

export default ValueSlider
