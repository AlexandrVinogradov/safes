import { useCategoriesStore } from '@/store/useCategoriesStore'
import { MobileMenuModalHeader } from '../MobileMenuModalHeader/MobileMenuModalHeader'
import { MobileScreenType } from '@/constants/nav'
import { useEffect, useState } from 'react'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'
import { CatalogMenuParentLvl } from '@/components/Header/HeaderComponents/CatalogPopover/CatalogMenu/CatalogMenuParentLvl/CatalogMenuParentLvl'
import { CategoryType } from '@/models/ICategoriesStore'
import { MenuChildLvl } from '@/components/Header/HeaderComponents/CatalogPopover/CatalogMenu/MenuChildLLvl/MenuChildLLvl'

type PropsType = {
	screen: MobileScreenType
	setScreen: (screen: MobileScreenType) => void
}

export const MobileCatalogMenuScreen = (props: PropsType) => {
	const { screen, setScreen } = props

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

	const handleClickBack = () => {
		if (!selectedLvl1 && !selectedLvl2) {
			setScreen('menu')

			return
		}
		if (selectedLvl2) {
			setSelectedLvl2(null)

			return
		}
		if (selectedLvl1 && !selectedLvl2) {
			setSelectedLvl1(null)

			return
		}
	}

	const getTitle = () => {
		// FIXME: equal logic of selected lvl
		if (!selectedLvl1 && !selectedLvl2) return 'Каталог'
		if (selectedLvl1 && !selectedLvl2) return selectedLvl1['name_ru-RU']
		if (selectedLvl2) return selectedLvl2['name_ru-RU']
		return ''
	}

	return (
		<section>
			<MobileMenuModalHeader title={getTitle()} onBack={handleClickBack} screen={screen} setScreen={setScreen} />

			{!selectedLvl1 && !selectedLvl2 && (
				<CatalogMenuParentLvl
					selectedLvl1={selectedLvl1}
					setSelectedLvl1={setSelectedLvl1}
					setSelectedLvl2={setSelectedLvl2}
					categories={categories}
					className="w-full"
					isClickLogic
				/>
			)}

			{selectedLvl1 && !selectedLvl2 && (
				<MenuChildLvl
					data={selectedLvl1}
					selectedLvl2={selectedLvl2}
					setSelectedLvl1={setSelectedLvl2}
					onChange={handleChangeLvl2}
					isClickLogic
					className="w-full h-full shadow-none"
				/>
			)}

			{selectedLvl2 && <MenuChildLvl data={selectedLvl2} isClickLogic className="w-full h-full shadow-none" />}
		</section>
	)
}
