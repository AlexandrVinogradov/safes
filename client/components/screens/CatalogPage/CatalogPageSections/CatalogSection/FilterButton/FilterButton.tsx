import { FilterIcon } from '@/icons/FilterIcon'
import { useModalStore } from '@/store/useModalStore'
import { MobileFilterModal } from './MobileFilterModal/MobileFilterModal'
import { ExtraValuesHandbook } from '@/models/IProductStore'
import { SimplManufactureType } from '@/models/IManufacturersStore'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	extraValuesHandbook: ExtraValuesHandbook[]
	simpleManufacturers: SimplManufactureType[] | null
	className?: string
}

export const FilterButton = (props: PropsType) => {
	const { extraValuesHandbook, simpleManufacturers, className } = props
	const setIsMobileFilterModal = useModalStore((state) => state.setIsMobileFilterModal)

	const handleClickFilterButton = () => setIsMobileFilterModal(true)

	return (
		<>
			<MobileFilterModal extraValuesHandbook={extraValuesHandbook} simpleManufacturers={simpleManufacturers} />
			<button onClick={handleClickFilterButton} className={clsx(s.button, className)}>
				<FilterIcon />
				Фильтры
			</button>
		</>
	)
}
