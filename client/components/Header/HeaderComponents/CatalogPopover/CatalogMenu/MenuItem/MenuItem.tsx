import { FatArrowLeftIcon } from '@/icons/FatArrowLeftIcon'
import Link from 'next/link'
import clsx from 'clsx'
import { s } from './styles'
import { CategoryType } from '@/models/ICategoriesStore'
import { mainMenuItemStyle } from '@/styles/mainMenuItem'

type PropsType = {
	category: CategoryType
	lvl?: number
	// setSelectedLvl1?: (category: CategoryType) => void
	// setIsShow: ((isShow: boolean) => void) | undefined
	isSelected: boolean
	setIsHovering: (isHovering: boolean) => void
	onChange?: (category: CategoryType) => void
}

export const MenuItem = (props: PropsType) => {
	const {
		onChange,
		category,
		lvl = 1,
		// setSelectedLvl1, setIsShow,
		isSelected,
		setIsHovering,
	} = props

	const handleOnMouseOver = () => {
		// if (setSelectedLvl1) setSelectedLvl1(category)
		// if (setIsShow && category.child) setIsShow(true)
		onChange && onChange(category)
	}
	const handleOnMouseOut = () => {
		// if (setIsShow) setIsShow(false)
		// if (setSelectedLvl1) setSelectedLvl1(null)
	}

	return (
		<li onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
			{category.child ? (
				<button
					className={clsx(
						lvl === 1 && mainMenuItemStyle,
						lvl === 1 && isSelected && s.selectedButton,
						lvl === 2 && s.buttonLvl2,
						lvl === 2 && isSelected && s.selectedButtonLvl2,
					)}
				>
					{category.name || category['name_ru-RU']}
					<span
						className={clsx(
							lvl === 1 && s.icon,
							lvl === 1 && isSelected && s.selectedIcon,
							lvl === 2 && s.iconLvl2,
							lvl === 2 && isSelected && s.selectedIconLvl2,
						)}
					>
						<FatArrowLeftIcon />
					</span>
				</button>
			) : (
				<Link
					href={`/${category['alias_ru-RU']}`}
					className={clsx(
						s.link,
						lvl === 1 && mainMenuItemStyle,
						lvl === 1 && isSelected && s.selectedButton,
						lvl === 2 && s.buttonLvl2,
						lvl === 2 && isSelected && s.selectedButtonLvl2,
					)}
					onClick={() => setIsHovering(false)}
				>
					{category.name || category['name_ru-RU']}
				</Link>
			)}
		</li>
	)
}
