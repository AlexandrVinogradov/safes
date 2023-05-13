import { Input } from '@/app/components/Input/Input'
import { ValueSlider } from '@/app/components/ValueSlider/ValueSlider'
import { REGEX_ONLY_NUMBERS_ } from '@/app/constants/regexConstants'
import useQueryParams from '@/app/hooks/useQueryParams'
import { s } from './styles'

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
		if (!REGEX_ONLY_NUMBERS_.test(value)) return

		setQueryParams({ [paramId]: `${Number(value)}-${selectedDiapason[1]}` })
		setDiapason([Number(value), selectedDiapason[1]])
	}
	const handleChangeMaxLimitInput = (value: string) => {
		if (!REGEX_ONLY_NUMBERS_.test(value)) return

		setQueryParams({ [paramId]: `${selectedDiapason[0]}-${value || 0}` })
		setDiapason([selectedDiapason[0], Number(value) || 0])
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
				<Input className={s.input} value={selectedDiapason[0]} onChange={(e) => handleChangeMinLimitInput(e.target.value)} />
				<Input className={s.input} value={selectedDiapason[1]} onChange={(e) => handleChangeMaxLimitInput(e.target.value)} />
			</div>
			<ValueSlider
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
