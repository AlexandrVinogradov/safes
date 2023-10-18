import { CategoryType } from '@/models/ICategoriesStore'
import { CatalogMenuShowAllButton } from '../CatalogMenuShowAllButton/CatalogMenuShowAllButton'
import { MenuItem } from '../MenuItem/MenuItem'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	categories: CategoryType[]
	setIsHovering?: (isHovering: boolean) => void
	selectedLvl1: CategoryType | null
	setSelectedLvl1: (selectedLvl1: CategoryType | null) => void
	setSelectedLvl2: (selectedLvl2: CategoryType | null) => void
	isClickLogic?: boolean
	className?: string
}
export const CatalogMenuParentLvl = (props: PropsType) => {
	const { categories, setIsHovering, selectedLvl1, setSelectedLvl1, setSelectedLvl2, isClickLogic, className } = props

	const tags = [
		{ id: 'forHouse', name: 'Сейфы для дома' },
		{ id: 'forOffice', name: 'Сейфы для офиса' },
		{ id: 'forApartments', name: 'Сейфы для квартиры' },
		{ id: 'caches', name: 'Тайники' },
		{ id: 'forWatch', name: 'Для часов' },
		{ id: 'forLaptop', name: 'Для ноутбуков' },
	]

	const handleChangeLvl1 = (category: CategoryType) => {
		setSelectedLvl1(category)
		setSelectedLvl2(null)
	}

	return (
		<div className={clsx(s.lvl1, className)}>
			<ul className={s.tags}>
				{tags.map((tag) => (
					<li key={tag.id} className={s.tag}>
						<button className={s.tagButton}>{tag.name}</button>
					</li>
				))}
			</ul>

			<ul>
				<CatalogMenuShowAllButton
					title="Все товары каталога"
					className={s.showAll}
					href="/catalog"
					handleOnMouseOverAll={() => setSelectedLvl1(null)}
					setIsHovering={setIsHovering}
				/>
				{categories?.map((category) => (
					<MenuItem
						key={category.category_id}
						isSelected={category.name === selectedLvl1?.name}
						category={category}
						setIsHovering={setIsHovering}
						onChange={handleChangeLvl1}
						isClickLogic={isClickLogic}
					/>
				))}
			</ul>
		</div>
	)
}
