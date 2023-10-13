import { CatalogPopover } from '../../HeaderComponents/CatalogPopover/CatalogPopover'
import { s } from './styles'
import { Nav } from '../../HeaderComponents/Nav/Nav'
import { ComparisonButton } from '../../HeaderComponents/ComparisonButton/ComparisonButton'
import { BasketPopover } from '../../HeaderComponents/BasketPopover/BasketPopover'

export const HeaderLowElements = () => {
	return (
		<div className={s.mainWrapper}>
			<div className={s.navWithCatalog}>
				<CatalogPopover className={s.catalogPopover} />

				<Nav className={s.nav} />
			</div>

			<div className={s.iconButtons}>
				<ComparisonButton />
				<BasketPopover />
			</div>
		</div>
	)
}
