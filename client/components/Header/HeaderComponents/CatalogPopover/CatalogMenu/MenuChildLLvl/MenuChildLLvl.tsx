import { MenuItem } from '../MenuItem/MenuItem'
import { CategoryType } from '@/models/ICategoriesStore'
import { CatalogMenuShowAllButton } from '../CatalogMenuShowAllButton/CatalogMenuShowAllButton'
import clsx from 'clsx'
import style from '../Scrollbar.module.scss'
import { s } from './styles'

type PropsType = {
	// selectedLvl1: CategoryType | null
	selectedLvl2?: CategoryType | null
	data: CategoryType | null
	setSelectedLvl1?: (category: CategoryType | null) => void
	zIndex: string
	// isShow: boolean
	// setIsShow: (isShow: boolean) => void
	// setIsShowChild?: (isShow: boolean) => void
	setIsHovering: (isHovering: boolean) => void
	lvl: number
	onChange?: (category: CategoryType) => void
}

export const MenuChildLvl = (props: PropsType) => {
	const {
		onChange,
		lvl,
		// selectedLvl1,
		selectedLvl2,
		setSelectedLvl1,
		zIndex,
		// isShow,
		// setIsShow,
		// setIsShowChild,
		setIsHovering,
		data,
	} = props

	// console.log(selectedLvl1)
	console.log(lvl, data)

	// if (!isShow) return null
	if (lvl === 1 && !data?.child) return null
	if (lvl === 2 && !data?.child) return null

	// if (lvl !== selectedLvl1?.lvl) return null

	// const handleOnMouseOver = () => setIsShow(true)
	// const handleOnMouseOut = () => setIsShow(false)

	const handleOnMouseOverAll = () => {
		// if (setSelectedLvl1) {
		// 	console.log('in')
		// 	setSelectedLvl1(null)
		// }
	}

	return (
		<div
			className={clsx(s.menu, zIndex, style.Scrollbar)}
			// onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}
			// onMouseOut={handleOnMouseOverAll}
		>
			<h5 className={s.title}>{data?.['name_ru-RU']}</h5>

			<CatalogMenuShowAllButton
				title="Показать все товары категории"
				href={`/${data?.['alias_ru-RU']}`}
				// handleOnMouseOverAll={handleOnMouseOverAll}
				setIsHovering={setIsHovering}
			/>

			<ul>
				{data?.child?.map((category) => (
					<MenuItem
						key={category.category_id}
						isSelected={category['name_ru-RU'] === selectedLvl2?.['name_ru-RU']}
						// setIsShow={setIsShowChild}
						// setSelectedLvl1={setSelectedLvl1}
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
