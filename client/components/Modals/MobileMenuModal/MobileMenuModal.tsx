import { MobileScreenType } from '@/constants/nav'
import { useModalStore } from '@/store/useModalStore'
import { useState } from 'react'
import { MobileMenuScreen } from './MobileMenuScreen/MobileMenuScreen'
import { FullScreenModal } from '@/components/Modal/FullScreenModal/FullScreenModal'
import { MobileCatalogMenuScreen } from './MobileCatalogMenuScreen/MobileCatalogMenuScreen'
import { MobileManufacturersMenuScreen } from './MobileManufacturersMenuScreen/MobileManufacturersMenuScreen'

export const MobileMenuModal = () => {
	const isMobileMenuModal = useModalStore((state) => state.isMobileMenuModal)

	const [screen, setScreen] = useState<MobileScreenType>('menu')

	return (
		<FullScreenModal isOpen={isMobileMenuModal}>
			{screen === 'menu' && <MobileMenuScreen setScreen={setScreen} />}
			{screen === 'catalog' && <MobileCatalogMenuScreen screen={screen} setScreen={setScreen} />}
			{screen === 'manufacturers' && <MobileManufacturersMenuScreen screen={screen} setScreen={setScreen} />}
		</FullScreenModal>
	)
}
