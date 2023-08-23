import Link from 'next/link'
import { s } from './styles'
import { ArrowDownIcon } from '@/icons/ArrowDownIcon'
import clsx from 'clsx'

type PropsType = {
	className?: string
}

export const Nav = (props: PropsType) => {
	const { className } = props

	return (
		<nav className={clsx(s.nav, className)}>
			<ul className={s.navList}>
				<li>
					<Link href="/about-company">О компании</Link>
				</li>
				<li>
					<Link href="/information">Статьи</Link>
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
					<Link href="/dostavka">Доставка и оплата</Link>
				</li>
				<li>
					<Link href="/contacts">Контакты</Link>
				</li>
			</ul>
		</nav>
	)
}
