import { Input } from '@/components/Input/Input'
import { REGEX_ONLY_NUMBERS } from '@/constants/regexConstants'
import { s } from './styles'
import dynamic from 'next/dynamic'
import { ValueSliderPropsType } from './ValueSlider/ValueSlider'
import { useQueryParams } from '@/hooks/useQueryParams'

const DynamicValueSlider = dynamic<ValueSliderPropsType>(() => import('./ValueSlider/ValueSlider'), { ssr: false })

type PropsType = {
	paramId: string
	title: string
	selectedDiapason: [number, number]
	fullDiapason: [number, number]
	setDiapason: (value: [number, number]) => void
}

export const FilterSlider = (props: PropsType) => {
	const { paramId, title, selectedDiapason, fullDiapason, setDiapason } = props
	const { setQueryParams } = useQueryParams()

	const handleChangeMinLimitInput = (value: string) => {
		// FIXME: delete comments
		// setQueryParams({ [paramId]: `${Number(value)}-${selectedDiapason[1]}` })

		const strippedValue = value.replace(/\s/g, '')
		if (!REGEX_ONLY_NUMBERS.test(strippedValue)) return

		const newMinLimit = Number(strippedValue)
		setDiapason([Number(newMinLimit), selectedDiapason[1]])
	}
	const handleChangeMaxLimitInput = (value: string) => {
		const strippedValue = value.replace(/\s/g, '')
		if (!REGEX_ONLY_NUMBERS.test(strippedValue)) return

		const newMaxLimit = Number(strippedValue)
		setDiapason([selectedDiapason[0], Number(newMaxLimit) || 0])

		// setQueryParams({ [paramId]: `${selectedDiapason[0]}-${value || 0}` })
	}

	const onChangeSlider = (value: [number, number]) => {
		setDiapason(value)
	}

	const onAfterChangeSlider = (value: [number, number]) => {
		setQueryParams({ [paramId]: `${value[0]}-${value[1]}` })
	}

	return (
		<div>
			<p className={s.title}>{title}</p>
			<div className={s.inputs}>
				<Input
					className={s.input}
					value={selectedDiapason[0].toLocaleString('ru-RU')}
					onChange={(e) => handleChangeMinLimitInput(e.target.value)}
				/>
				<Input
					className={s.input}
					value={selectedDiapason[1].toLocaleString('ru-RU')}
					onChange={(e) => handleChangeMaxLimitInput(e.target.value)}
				/>
			</div>
			<DynamicValueSlider
				defaultValue={fullDiapason}
				min={fullDiapason[0]}
				max={fullDiapason[1]}
				onChange={onChangeSlider}
				onAfterChange={onAfterChangeSlider}
				value={selectedDiapason}
			/>
		</div>
	)
}
