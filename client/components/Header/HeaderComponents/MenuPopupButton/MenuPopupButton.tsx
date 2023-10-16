import { Button } from '@/components/Button/Button'
import { CatalogMenuIcon } from '@/icons/CatalogMenuIcon'
import { MobileMenuModal } from '@/components/Modals/MobileMenuModal/MobileMenuModal'
import { useModalStore } from '@/store/useModalStore'
import clsx from 'clsx'
import { s } from './styles'

type PropsType = {
	className?: string
}

export const MenuPopupButton = (props: PropsType) => {
	const { className } = props

	const setIsMobileMenuModal = useModalStore((state) => state.setIsMobileMenuModal)

	const handleOpenMobileMenu = () => setIsMobileMenuModal(true)

	return (
		<>
			<MobileMenuModal />
			<Button styleType="filled" onClick={handleOpenMobileMenu} className={clsx(s.menuCatalogButton, className)}>
				<CatalogMenuIcon />
			</Button>
		</>
	)
}
