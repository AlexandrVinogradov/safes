import { ArrowDownIcon } from '@/icons/ArrowDownIcon'
import Link from 'next/link'
import { CatalogPopover } from './CatalogPopover/CatalogPopover'
import { s } from './styles'
import { BasketPopover } from './BasketPopover/BasketPopover'

export const HeaderLowElements = () => {
	return (
		<div className={s.mainWrapper}>
			<div className={s.navWithCatalog}>
				<CatalogPopover />

				<nav className={s.nav}>
					<ul className={s.navList}>
						<li>
							<Link href="/about-company">О компании</Link>
						</li>
						<li>
							<Link href="/info">Информация</Link>
						</li>
						<li>
							<Link href="/instruction">Инструкции</Link>
						</li>
						<li>
							<button className={s.manufacturers}>
								Производители
								<ArrowDownIcon className={s.manufacturersIcon} />
							</button>
						</li>
						<li>
							<Link href="/delivery">Доставка и оплата</Link>
						</li>
						<li>
							<Link href="/contacts">Контакты</Link>
						</li>
					</ul>
				</nav>
			</div>

			<BasketPopover />
		</div>
	)
}