import Link from 'next/link'
import { MenuItem } from '../MenuItem/MenuItem'
import clsx from 'clsx'
import { s } from './styles'
import { CategoryType } from '@/models/ICategoriesStore'

type PropsType = {
	selectedLvl1: CategoryType | null
	selectedLvl2?: CategoryType | null
	setSelectedLvl1?: (category: CategoryType | null) => void
	zIndex: string
	isShow: boolean
	setIsShow: (isShow: boolean) => void 
	setIsShowChild?: (isShow: boolean) => void
	setIsHovering: (isHovering: boolean) => void
}

export const MenuChildLvl = (props: PropsType) => {
	const { selectedLvl1, selectedLvl2, setSelectedLvl1, zIndex, isShow, setIsShow, setIsShowChild, setIsHovering } = props

	if (!isShow) return null

	const handleOnMouseOver = () => setIsShow(true)
	const handleOnMouseOut = () => setIsShow(false)

	const handleOnMouseOverAll = () => {
		if (setSelectedLvl1) setSelectedLvl1(null)
	}

	return (
		<div className={clsx(s.menu, zIndex)} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
			<h5 className={s.title}>{selectedLvl1?.['name_ru-RU']}</h5>
			<Link
				className={s.link}
				href={`/${selectedLvl1?.['alias_ru-RU']}`}
				onMouseOver={handleOnMouseOverAll}
				onClick={() => setIsHovering(false)}
			>
				<span className={s.dot} />
				Показать все товары категории
			</Link>

			<ul>
				{selectedLvl1?.child?.map((category) => (
					<MenuItem
						isSelected={category['name_ru-RU'] === selectedLvl2?.['name_ru-RU']}
						setIsShow={setIsShowChild}
						setSelectedLvl1={setSelectedLvl1}
						category={category}
						lvl={2}
						setIsHovering={setIsHovering}
					/>
				))}
			</ul>
		</div>
	)
}
