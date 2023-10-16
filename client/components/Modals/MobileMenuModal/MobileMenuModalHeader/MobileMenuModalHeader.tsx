import { IconButton } from '@/components/IconButton/IconButton'
import { CrossIcon } from '@/icons/CrossIcon'
import { s } from './styles'
import { useModalStore } from '@/store/useModalStore'
import { MobileScreenType } from '@/constants/nav'
import { LongArrowLeftIcon } from '@/icons/LongArrowLeftIcon'

type PropsType = {
	screen?: MobileScreenType
	setScreen: (screen: MobileScreenType) => void
	onBack?: () => void
}

export const MobileMenuModalHeader = (props: PropsType) => {
	const { screen = 'menu', setScreen, onBack } = props

	const setIsMobileMenuModal = useModalStore((state) => state.setIsMobileMenuModal)

	const handleClose = () => {
		setIsMobileMenuModal(false)
		setScreen('menu')
	}

	const getTitle = (screen: MobileScreenType) => {
		if (screen === 'catalog') return 'Каталог'
		if (screen === 'manufacturers') return 'Производители'
		return 'Меню'
	}

	return (
		<header className={s.header}>
			{screen !== 'menu' && <IconButton onClick={onBack} icon={<LongArrowLeftIcon />} />}

			{getTitle(screen)}
			<IconButton onClick={handleClose} icon={<CrossIcon />} />
		</header>
	)
}
