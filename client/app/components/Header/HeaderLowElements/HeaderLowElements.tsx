'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CatalogPopover } from './CatalogPopover/CatalogPopover'
import { s } from './styles'

export const HeaderLowElements = () => {
	return (
		<div className={s.mainWrapper}>
			<div className={s.navWithCatalog}>
				<CatalogPopover />

				<nav className={s.nav}>
					<ul className={s.navList}>
						<li>
							<Link href="/company">О компании</Link>
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
								<Image
									className={s.manufacturersIcon}
									src="/arrowDownIcon.svg"
									alt="Производители"
									width={11}
									height={9}
									priority
								/>
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

			<button className={s.basket}>
				<Image className={s.basketIcon} src="/basketIcon.svg" alt="Корзина" width={30} height={30} priority />
				<p className="">250 000 руб.</p>
			</button>
		</div>
	)
}
