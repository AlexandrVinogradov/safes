import { IconButton } from '@/components/IconButton/IconButton'
import { CrossIcon } from '@/icons/CrossIcon'
import { s } from './styles'
import { useModalStore } from '@/store/useModalStore'
import { MobileScreenType } from '@/constants/nav'
import { LongArrowLeftIcon } from '@/icons/LongArrowLeftIcon'

type PropsType = {
	title: string
	screen?: MobileScreenType
	setScreen: (screen: MobileScreenType) => void
	onBack?: () => void
}

export const MobileMenuModalHeader = (props: PropsType) => {
	const { title, screen = 'menu', setScreen, onBack } = props

	const setIsMobileMenuModal = useModalStore((state) => state.setIsMobileMenuModal)

	const handleClose = () => {
		setIsMobileMenuModal(false)
		setScreen('menu')
	}

	return (
		<header className={s.header}>
			{screen !== 'menu' && <IconButton onClick={onBack} icon={<LongArrowLeftIcon />} />}

			<span className={s.title}>{title}</span>
			<IconButton onClick={handleClose} icon={<CrossIcon />} />
		</header>
	)
}
