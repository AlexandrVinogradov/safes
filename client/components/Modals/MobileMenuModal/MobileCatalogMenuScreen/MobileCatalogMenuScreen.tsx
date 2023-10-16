import { MobileMenuModalHeader } from '../MobileMenuModalHeader/MobileMenuModalHeader'
import { MobileScreenType } from '@/constants/nav'

type PropsType = {
	screen: MobileScreenType
	setScreen: (screen: MobileScreenType) => void
}

export const MobileCatalogMenuScreen = (props: PropsType) => {
	const { screen, setScreen } = props

	const handleClickBack = () => setScreen('menu')

	return (
		<section>
			<MobileMenuModalHeader onBack={handleClickBack} screen={screen} setScreen={setScreen} />
			catalog
		</section>
	)
}
