import Link from 'next/link'
import { s } from './styles'
import clsx from 'clsx'
import { ManufacturerPopover } from '../ManufacturerPopover/ManufacturerPopover'

type PropsType = {
	className?: string
}

export const Nav = (props: PropsType) => {
	const { className } = props

	return (
		<nav className={clsx(s.nav, className)}>
			<ul className={s.navList}>
				<li>
					<Link className={s.link} href="/about-company">
						О компании
					</Link>
				</li>
				<li>
					<Link className={s.link} href="/information">
						Статьи
					</Link>
				</li>
				<li>
					<Link className={s.link} href="/instruction">
						Инструкции
					</Link>
				</li>
				<li>
					<ManufacturerPopover />
				</li>
				<li>
					<Link className={s.link} href="/dostavka">
						Доставка и оплата
					</Link>
				</li>
				<li>
					<Link className={s.link} href="/contacts">
						Контакты
					</Link>
				</li>
			</ul>
		</nav>
	)
}
