import { useEffect, useState } from 'react'
import { s } from './styles'
import { useCategoriesStore } from '@/store/useCategoriesStore'
import { MenuItem } from './MenuItem/MenuItem'
import { MenuChildLvl } from './MenuChildLLvl/MenuChildLLvl'
import { CategoryType } from '@/models/ICategoriesStore'
import { CatalogMenuShowAllButton } from './CatalogMenuShowAllButton/CatalogMenuShowAllButton'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'

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

	const tags = [
		{ id: 'forHouse', name: 'Сейфы для дома' },
		{ id: 'forOffice', name: 'Сейфы для офиса' },
		{ id: 'forApartments', name: 'Сейфы для квартиры' },
		{ id: 'caches', name: 'Тайники' },
		{ id: 'forWatch', name: 'Для часов' },
		{ id: 'forLaptop', name: 'Для ноутбуков' },
	]

	const [selectedLvl1, setSelectedLvl1] = useState<CategoryType | null>(null)
	const [selectedLvl2, setSelectedLvl2] = useState<CategoryType | null>(null)
	const [isShowSecondLvl, setIsShowSecondLvl] = useState(false)
	const [isShowThirdLvl, setIsShowThirdLvl] = useState(false)
	const handleSetIsShowThirdLvl = (isShow: boolean) => {
		setIsShowSecondLvl(isShow)
		setIsShowThirdLvl(isShow)
	}

	return (
		<div className={s.menu} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			<div className={s.lvl1}>
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
							setIsShow={setIsShowSecondLvl}
							setSelectedLvl1={setSelectedLvl1}
							category={category}
							setIsHovering={setIsHovering}
						/>
					))}
				</ul>
			</div>

			<MenuChildLvl
				selectedLvl1={selectedLvl1}
				selectedLvl2={selectedLvl2}
				setSelectedLvl1={setSelectedLvl2}
				zIndex="z-20"
				isShow={isShowSecondLvl}
				setIsShow={setIsShowSecondLvl}
				setIsShowChild={setIsShowThirdLvl}
				setIsHovering={setIsHovering}
			/>
			<MenuChildLvl
				selectedLvl1={selectedLvl2}
				zIndex="z-10"
				isShow={isShowThirdLvl}
				setIsShow={handleSetIsShowThirdLvl}
				setIsHovering={setIsHovering}
			/>
		</div>
	)
}
