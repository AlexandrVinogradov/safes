import { useEffect, useState } from 'react'
import { useCategoriesStore } from '@/store/useCategoriesStore'
import { MenuChildLvl } from './MenuChildLLvl/MenuChildLLvl'
import { CategoryType } from '@/models/ICategoriesStore'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'
import { CatalogMenuParentLvl } from './CatalogMenuParentLvl/CatalogMenuParentLvl'
import { s } from './styles'

type PropsType = {
	setIsHovering: (isHovering: boolean) => void
	handleMouseOver: () => void
	handleMouseOut: () => void
}

export const CatalogMenu = (props: PropsType) => {
	const { setIsHovering, handleMouseOver, handleMouseOut } = props

	// TODO: add preloader and fetch after isHovering true
	const categories = useCategoriesStore((state) => state.categories)
	const fetchCategories = useCategoriesStore((state) => state.fetchCategories)

	useEffect(() => {
		if (categories.length) return

		const API_URL = getClientServerUrl('categories')
		fetchCategories(API_URL)
	}, [])

	const [selectedLvl1, setSelectedLvl1] = useState<CategoryType | null>(null)
	const [selectedLvl2, setSelectedLvl2] = useState<CategoryType | null>(null)

	const handleChangeLvl2 = (category: CategoryType) => {
		setSelectedLvl2(category)
	}

	return (
		<div className={s.menu} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			<CatalogMenuParentLvl
				setIsHovering={setIsHovering}
				selectedLvl1={selectedLvl1}
				setSelectedLvl1={setSelectedLvl1}
				setSelectedLvl2={setSelectedLvl2}
				categories={categories}
			/>
			<MenuChildLvl
				data={selectedLvl1}
				selectedLvl2={selectedLvl2}
				setSelectedLvl1={setSelectedLvl2}
				zIndex="z-20"
				setIsHovering={setIsHovering}
				lvl={1}
				onChange={handleChangeLvl2}
			/>
			<MenuChildLvl data={selectedLvl2} zIndex="z-10" setIsHovering={setIsHovering} lvl={2} />
		</div>
	)
}
