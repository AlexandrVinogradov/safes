import { useEffect } from 'react'
import { Button } from '@/app/components/Button/Button'
import { FilterSlider } from './FilterSlider/FilterSlider'
import { useProductStore } from '@/app/store/createProductStore'
import { isObjectEmpty } from '@/app/helpers/isObjectEmpty'
import useQueryParams from '@/app/hooks/useQueryParams'

export const Filter = ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
	const filterData = useProductStore((state) => state.filterData)
	const setFilterData = useProductStore((state) => state.setFilterData)
	const resetFilter = useProductStore((state) => state.resetFilter)

	const { resetQueryParams } = useQueryParams()

	useEffect(() => {
		if (isObjectEmpty(searchParams)) return

		let newFilterData = { ...filterData }
		const params = ['price', 'weight']
		for (const key in searchParams) {
			if (params.includes(key)) {
				// FIXME:
				// @ts-ignore
				newFilterData[key].selectedDiapason = searchParams[key]?.split('-').map((el) => Number(el))
			}
		}
	}, [])

	const handleResetFilter = () => {
		resetFilter()
		resetQueryParams()
	}

	return (
		<div className="mr-10">
			{/* // FIXME: */}

			<div className="w-[315px] px-2.5 py-5 mb-5 text-white bg-branded rounded-sm text-[17px] self-start">
				<p className="pb-2.5 text-lg font-bold">Фильтр</p>

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
			<Button onClick={handleResetFilter} className="w-full">
				Сбросить фильтр
			</Button>
		</div>
	)
}
