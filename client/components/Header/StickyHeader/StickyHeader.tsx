import Link from 'next/link'
import { s } from './styles'
import { LogoShieldOnly } from '@/icons/LogoShieldOnly'
import { CatalogPopover } from '../HeaderComponents/CatalogPopover/CatalogPopover'
import { Nav } from '../HeaderComponents/Nav/Nav'
import { Search } from '../HeaderComponents/Search/Search'
import { ComparisonButton } from '../HeaderComponents/ComparisonButton/ComparisonButton'
import { BasketPopover } from '../HeaderComponents/BasketPopover/BasketPopover'
import { PhoneButton } from '@/components/Contacts/PhoneButton/PhoneButton'
import { MailButton } from '@/components/Contacts/MailButton/MailButton'

export const StickyHeader = () => {
	return (
		<header className={s.headerWrapper}>
			<Link href="/">
				<LogoShieldOnly />
			</Link>
			<CatalogPopover className={s.catalogPopover} />
			<Nav className={s.nav} />
			<Search className={s.search} />

			<div className={s.buttons}>
				<ComparisonButton />
				<BasketPopover isShowPrice={false} />
				<PhoneButton />
				<MailButton />
			</div>
		</header>
	)
}
