import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LogoShieldOnly } from '@/icons/LogoShieldOnly'
import { CatalogPopover } from '../HeaderComponents/CatalogPopover/CatalogPopover'
import { Nav } from '../HeaderComponents/Nav/Nav'
import { Search } from '../HeaderComponents/Search/Search'
import { ComparisonButton } from '../HeaderComponents/ComparisonButton/ComparisonButton'
import { BasketPopover } from '../HeaderComponents/BasketPopover/BasketPopover'
import { PhoneButton } from '@/components/Contacts/PhoneButton/PhoneButton'
import { MailButton } from '@/components/Contacts/MailButton/MailButton'
import { IconButton } from '@/components/IconButton/IconButton'
import { SearchIcon } from '@/icons/SearchIcon'
import { s } from './styles'
import { BasketButton } from '../HeaderComponents/BasketPopover/BasketButton/BasketButton'
import { MenuPopupButton } from '../HeaderComponents/MenuPopupButton/MenuPopupButton'

export const StickyHeader = () => {
	// TODO: duplicate logic HeaderUpElements.tsx
	const [isShowPopover, setIsShowPopover] = useState(false)
	const [isDesktop, setDesktop] = useState(window.innerWidth > 1400)

	const updateMedia = () => {
		setDesktop(window.innerWidth > 1400)
	}

	useEffect(() => {
		setDesktop(window.innerWidth > 1400)
		window.addEventListener('resize', updateMedia)
		return () => window.removeEventListener('resize', updateMedia)
	})

	const handleClickMobileSearch = () => setIsShowPopover(true)

	return (
		<header className={s.headerWrapper}>
			<Link href="/">
				<LogoShieldOnly className={s.logo} />
			</Link>
			<CatalogPopover className={s.catalogPopover} />
			<MenuPopupButton className={s.menuPopupButton} />
			<Nav className={s.nav} />

			{isDesktop ? (
				<Search isShowPopover={isShowPopover} setIsShowPopover={setIsShowPopover} className={s.search} />
			) : (
				<Search isMobileSearch isShowPopover={isShowPopover} setIsShowPopover={setIsShowPopover} className={s.mobileSearch} />
			)}
			<IconButton onClick={handleClickMobileSearch} className={s.mobileSearchButton} icon={<SearchIcon width="w-[33px]" />} />

			<div className={s.buttons}>
				<ComparisonButton />
				<BasketPopover isShowPrice={false} className={s.desktopBasket} />
				<Link href="/cart" className={s.mobileBasket}>
					<BasketButton />
				</Link>
				<PhoneButton />
				<MailButton />
			</div>
		</header>
	)
}
