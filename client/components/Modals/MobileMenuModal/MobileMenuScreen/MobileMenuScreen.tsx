import { MobileMenuModalHeader } from '../MobileMenuModalHeader/MobileMenuModalHeader'
import { MobileScreenType, NavType, mobileNavLinks, nav } from '@/constants/nav'
import { FatArrowLeftIcon } from '@/icons/FatArrowLeftIcon'
import clsx from 'clsx'
import Link from 'next/link'
import { s } from './styles'
import { useModalStore } from '@/store/useModalStore'
import { mainMenuItemStyle } from '@/styles/mainMenuItem'

type PropsType = {
	setScreen: (screen: MobileScreenType) => void
}

export const MobileMenuScreen = (props: PropsType) => {
	const { setScreen } = props

	const setIsMobileMenuModal = useModalStore((state) => state.setIsMobileMenuModal)

	const handleChangeScreen = (id: MobileScreenType) => setScreen(id)

	const getMobileMenuItem = (item: NavType) => {
		if (mobileNavLinks.includes(item.id)) {
			return (
				<Link onClick={() => setIsMobileMenuModal(false)} className={clsx(mainMenuItemStyle, s.menuItem)} href={item.to}>
					{item.name}
				</Link>
			)
		}

		return (
			<button onClick={() => handleChangeScreen(item.id as MobileScreenType)} className={clsx(mainMenuItemStyle, s.menuItem)}>
				{item.name}
				<FatArrowLeftIcon />
			</button>
		)
	}

	return (
		<section>
			<MobileMenuModalHeader title='Меню' setScreen={setScreen} />

			<ul>
				{nav.map((item) => (
					<li key={item.name}>{getMobileMenuItem(item)}</li>
				))}
			</ul>
		</section>
	)
}
