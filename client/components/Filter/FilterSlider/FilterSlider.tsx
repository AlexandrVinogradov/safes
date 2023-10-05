import { useEffect } from 'react'
import { Input } from '@/components/Input/Input'
import { REGEX_ONLY_NUMBERS } from '@/constants/regexConstants'
import { ValueSliderPropsType } from './ValueSlider/ValueSlider'
import { useDebounce } from '@/hooks/useDebounce'
import { useQueryParams } from '@/hooks/useQueryParams'
import { s } from './styles'
import dynamic from 'next/dynamic'

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
	const debouncedMinValue = useDebounce<number>(selectedDiapason[0], 500)
	const debouncedMaxValue = useDebounce<number>(selectedDiapason[1], 500)

	const handleChangeMinLimitInput = (value: string) => {
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
	}

	useEffect(() => {
		if (selectedDiapason[0] === fullDiapason[0] && selectedDiapason[1] === fullDiapason[1]) return

		setQueryParams({ [paramId]: `${selectedDiapason[0]}-${selectedDiapason[1]}`, page: '1' })
	}, [debouncedMinValue, debouncedMaxValue])

	const onChangeSlider = (value: [number, number]) => {
		setDiapason(value)
	}

	const onAfterChangeSlider = (value: [number, number]) => {
		setQueryParams({ [paramId]: `${value[0]}-${value[1]}`, page: '1' })
	}

	const getInputMinValue = (value: number) => {
		// FIXME: cant change middle symbols
		return value ? value.toLocaleString('ru-RU') : ''
		// return value ? value : ''
		// return value
	}

	return (
		<div>
			<p className={s.title}>{title}</p>
			<div className={s.inputs}>
				<Input
					className={s.input}
					value={getInputMinValue(selectedDiapason[0])}
					onChange={(e) => handleChangeMinLimitInput(e.target.value)}
					placeholder="0"
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
