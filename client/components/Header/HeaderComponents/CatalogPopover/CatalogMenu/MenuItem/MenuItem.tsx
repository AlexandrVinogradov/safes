import { FatArrowLeftIcon } from '@/icons/FatArrowLeftIcon'
import Link from 'next/link'
import clsx from 'clsx'
import { s } from './styles'
import { CategoryType } from '@/models/ICategoriesStore'
import { mainMenuItemStyle } from '@/styles/mainMenuItem'
import { useModalStore } from '@/store/useModalStore'

type PropsType = {
	category: CategoryType
	lvl?: number
	isSelected: boolean
	setIsHovering?: (isHovering: boolean) => void
	onChange?: (category: CategoryType) => void
	isClickLogic?: boolean
}

export const MenuItem = (props: PropsType) => {
	const { onChange, category, lvl = 1, isSelected, setIsHovering, isClickLogic } = props

	const setIsMobileMenuModal = useModalStore((state) => state.setIsMobileMenuModal)

	const handleOnMouseOver = () => {
		onChange && !isClickLogic && onChange(category)
	}
	const handleClickItem = () => {
		onChange && isClickLogic && onChange(category)
	}

	const handleClickLink = () => {
		setIsMobileMenuModal(false)
		setIsHovering && setIsHovering(false)
	}

	return (
		<li onMouseOver={handleOnMouseOver} onClick={handleClickItem}>
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
					onClick={handleClickLink}
				>
					{category.name || category['name_ru-RU']}
				</Link>
			)}
		</li>
	)
}
