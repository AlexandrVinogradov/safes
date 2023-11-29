import { CatalogPopover } from '../../HeaderComponents/CatalogPopover/CatalogPopover'
import { Nav } from '../../HeaderComponents/Nav/Nav'
import { ComparisonButton } from '../../HeaderComponents/ComparisonButton/ComparisonButton'
import { BasketPopover } from '../../HeaderComponents/BasketPopover/BasketPopover'
import { MenuPopupButton } from '../../HeaderComponents/MenuPopupButton/MenuPopupButton'
import { s } from './styles'
import { BasketButton } from '../../HeaderComponents/BasketPopover/BasketButton/BasketButton'
import Link from 'next/link'

export const HeaderLowElements = () => {
	return (
		<div className={s.mainWrapper}>
			<div className={s.navWithCatalog}>
				<CatalogPopover className={s.catalogPopover} />
				<MenuPopupButton className={s.menuPopupButton} />

				<Nav className={s.nav} />
			</div>

			<div className={s.iconButtons}>
				<a className={s.mailLink} href="mailto:prommetsafe@yandex.ru">
					prommetsafe@yandex.ru
				</a>
				<ComparisonButton />
				<BasketPopover className={s.desktopBasket} />

				<Link href="/cart" className={s.mobileBasket}>
					<BasketButton />
				</Link>
			</div>
		</div>
	)
}
