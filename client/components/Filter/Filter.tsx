import { useEffect, useRef } from 'react'
import { Button } from '@/components/Button/Button'
import { FilterSlider } from './FilterSlider/FilterSlider'
import { useProductStore } from '@/store/useProductStore'
import { isObjectEmpty } from '@/helpers/isObjectEmpty'
import { useRouter } from 'next/router'
import { SimplManufactureType } from '@/models/IManufacturersStore'
import { getClearManufacturerName } from '@/helpers/getClearManufacturerName'
import { ExtraValuesHandbook, FilterDataType } from '@/models/IProductStore'
import { useQueryParams } from '@/hooks/useQueryParams'
import MultiSelect from '../MultiSelect/MultiSelect'
import { s } from './styles'
import ScrollStyle from './Scrollbar.module.scss'
import clsx from 'clsx'

type PropsType = {
	extraValuesHandbook: ExtraValuesHandbook[]
	simpleManufacturers: SimplManufactureType[] | null
}

export const Filter = (props: PropsType) => {
	const { extraValuesHandbook, simpleManufacturers } = props
	const { query } = useRouter()
	const filterData = useProductStore((state) => state.filterData)
	const setFilterData = useProductStore((state) => state.setFilterData)
	const initFilterData = useProductStore((state) => state.initFilterData)
	const resetFilter = useProductStore((state) => state.resetFilter)

	const { resetQueryParams } = useQueryParams()

	useEffect(() => {
		if (isObjectEmpty(query)) return

		let newFilterData = { ...filterData }
		const params = ['price', 'weight', 'height', 'width', 'depth']

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

	const getExtraValuesOptions = (handbook: ExtraValuesHandbook[], fieldId: number) => {
		return handbook.filter((el) => el.field_id === fieldId).map((el) => ({ label: el['name_ru-RU'], value: String(el.id) }))
	}

	const manufacturersOption =
		simpleManufacturers?.map((manufacturer) => ({
			label: getClearManufacturerName(manufacturer['name_ru-RU']),
			value: String(manufacturer.manufacturer_id),
		})) || []

	return (
		<div className={s.filter}>
			<div className={clsx(s.settings, ScrollStyle.Scrollbar)}>
				<p className={s.title}>Фильтр</p>

				<p className={s.label}>Производитель</p>
				<MultiSelect id="manufacturer" options={manufacturersOption} className={s.settingItem} />

				<p className={s.label}>Взломостойкость</p>
				<MultiSelect id="burglaryResistance" options={getExtraValuesOptions(extraValuesHandbook, 3)} className={s.settingItem} />

				<p className={s.label}>Огнестойкость</p>
				<MultiSelect id="fireResistance" options={getExtraValuesOptions(extraValuesHandbook, 4)} className={s.settingItem} />

				<p className={s.label}>Вид замка</p>
				<MultiSelect id="keyType" options={getExtraValuesOptions(extraValuesHandbook, 9)} className={s.settingItem} />

				<p className={s.label}>Кол-во стволов</p>
				<MultiSelect id="gunCount" options={getExtraValuesOptions(extraValuesHandbook, 8)} className={s.settingItem} />

				<p className={s.label}>Толщина металла</p>
				<MultiSelect id="metalThickness" options={getExtraValuesOptions(extraValuesHandbook, 20)} className={s.settingItem} />

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
				<FilterSlider
					paramId="height"
					selectedDiapason={filterData.height.selectedDiapason}
					fullDiapason={filterData.height.fullDiapason}
					title="Высота (ММ)"
					setDiapason={(value) => setFilterData('height', value)}
				/>
				<FilterSlider
					paramId="width"
					selectedDiapason={filterData.width.selectedDiapason}
					fullDiapason={filterData.width.fullDiapason}
					title="Ширина (ММ)"
					setDiapason={(value) => setFilterData('width', value)}
				/>
				<FilterSlider
					paramId="depth"
					selectedDiapason={filterData.depth.selectedDiapason}
					fullDiapason={filterData.depth.fullDiapason}
					title="Глубина (ММ)"
					setDiapason={(value) => setFilterData('depth', value)}
				/>
			</div>
			<Button onClick={handleResetFilter} className={s.resetButton}>
				Сбросить фильтр
			</Button>
		</div>
	)
}
