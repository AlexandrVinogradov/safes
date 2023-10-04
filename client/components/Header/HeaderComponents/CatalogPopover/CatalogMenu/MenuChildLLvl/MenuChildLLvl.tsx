import { MenuItem } from '../MenuItem/MenuItem'
import { CategoryType } from '@/models/ICategoriesStore'
import { CatalogMenuShowAllButton } from '../CatalogMenuShowAllButton/CatalogMenuShowAllButton'
import clsx from 'clsx'
import { s } from './styles'

type PropsType = {
	selectedLvl2?: CategoryType | null
	data: CategoryType | null
	setSelectedLvl1?: (category: CategoryType | null) => void
	zIndex: string
	setIsHovering: (isHovering: boolean) => void
	lvl: number
	onChange?: (category: CategoryType) => void
}

export const MenuChildLvl = (props: PropsType) => {
	const { onChange, lvl, selectedLvl2, zIndex, setIsHovering, data } = props

	if (lvl === 1 && !data?.child) return null
	if (lvl === 2 && !data?.child) return null

	return (
		<div className={clsx(s.menu, zIndex)}>
			<h5 className={s.title}>{data?.['name_ru-RU']}</h5>

			<CatalogMenuShowAllButton
				title="Показать все товары категории"
				href={`/${data?.['alias_ru-RU']}`}
				setIsHovering={setIsHovering}
			/>

			<ul>
				{data?.child?.map((category) => (
					<MenuItem
						key={category.category_id}
						isSelected={category['name_ru-RU'] === selectedLvl2?.['name_ru-RU']}
						category={category}
						lvl={2}
						setIsHovering={setIsHovering}
						onChange={onChange}
					/>
				))}
			</ul>
		</div>
	)
}
