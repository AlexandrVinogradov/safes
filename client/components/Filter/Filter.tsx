import { useEffect, useRef } from 'react'
import { Button } from '@/components/Button/Button'
import { FilterSlider } from './FilterSlider/FilterSlider'
import { useProductStore } from '@/store/useProductStore'
import { isObjectEmpty } from '@/helpers/isObjectEmpty'
import { useRouter } from 'next/router'
import { ExtraValuesHandbook, FilterDataType } from '@/models/IProductStore'
import { useQueryParams } from '@/hooks/useQueryParams'
import MultiSelect from '../MultiSelect/MultiSelect'
import { s } from './styles'

type PropsType = {
	extraValuesHandbook: ExtraValuesHandbook[]
}

export const Filter = (props: PropsType) => {
	const { extraValuesHandbook } = props
	const { query } = useRouter()
	const filterData = useProductStore((state) => state.filterData)
	const setFilterData = useProductStore((state) => state.setFilterData)
	const initFilterData = useProductStore((state) => state.initFilterData)
	const resetFilter = useProductStore((state) => state.resetFilter)

	const { resetQueryParams } = useQueryParams()

	useEffect(() => {
		if (isObjectEmpty(query)) return

		let newFilterData = { ...filterData }
		const params = ['price', 'weight']

		for (const key in query) {
			if (params.includes(key)) {
				newFilterData = {
					...newFilterData,
					[key]: {
						...newFilterData[key as keyof FilterDataType],
						selectedDiapason: String(query[key])
							.split('-')
							.map((el) => Number(el)),
					},
				}
			}
		}

		initFilterData(newFilterData)
	}, [query])

	const selectedCategory = useRef(query.id)
	useEffect(() => {
		if (selectedCategory.current && selectedCategory.current !== query.id) {
			selectedCategory.current = query.id
			resetFilter()
			resetQueryParams()
		}
	}, [query])

	const handleResetFilter = () => {
		resetFilter()
		resetQueryParams()
	}

	const getOptions = (handbook: ExtraValuesHandbook[], fieldId: number) => {
		return handbook.filter((el) => el.field_id === fieldId).map((el) => ({ label: el['name_ru-RU'], value: String(el.id) }))
	}

	return (
		<div className={s.filter}>
			<div className={s.settings}>
				<p className={s.title}>Фильтр</p>

				<p className={s.label}>Взломостойкость</p>
				<MultiSelect id="burglaryResistance" options={getOptions(extraValuesHandbook, 3)} className={s.settingItem} />

				<p className={s.label}>Огнестойкость</p>
				<MultiSelect id="fireResistance" options={getOptions(extraValuesHandbook, 4)} className={s.settingItem} />

				<p className={s.label}>Вид замка</p>
				<MultiSelect id="keyType" options={getOptions(extraValuesHandbook, 9)} className={s.settingItem} />

				<p className={s.label}>Кол-во стволов</p>
				<MultiSelect id="gunCount" options={getOptions(extraValuesHandbook, 8)} className={s.settingItem} />

				<p className={s.label}>Толщина металла</p>
				<MultiSelect id="metalThickness" options={getOptions(extraValuesHandbook, 20)} className={s.settingItem} />

				<FilterSlider
					paramId="price"
					selectedDiapason={filterData.price.selectedDiapason}
					fullDiapason={filterData.price.fullDiapason}
					title="Цена ₽"
					setDiapason={(value) => setFilterData('price', value)}
				/>
				<FilterSlider
					paramId="weight"
					selectedDiapason={filterData.weight.selectedDiapason}
					fullDiapason={filterData.weight.fullDiapason}
					title="Вес (кг)"
					setDiapason={(value) => setFilterData('weight', value)}
				/>
			</div>
			<Button onClick={handleResetFilter} className={s.resetButton}>
				Сбросить фильтр
			</Button>
		</div>
	)
}
