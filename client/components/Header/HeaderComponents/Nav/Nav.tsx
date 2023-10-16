import Link from 'next/link'
import { s } from './styles'
import clsx from 'clsx'
import { ManufacturerPopover } from '../ManufacturerPopover/ManufacturerPopover'
import { NavType, nav } from '@/constants/nav'

type PropsType = {
	className?: string
}

export const Nav = (props: PropsType) => {
	const { className } = props

	const getHeaderNav = (nav: NavType[]) => {
		const headerNav = [...nav]
		const index = headerNav.findIndex((item) => item.name === 'Каталог')

		if (index === -1) return headerNav
		headerNav.splice(index, 1)

		return headerNav
	}

	const getNavItem = (item: NavType) => {
		if (item.name === 'Производители')
			return (
				<li key={item.id}>
					<ManufacturerPopover />
				</li>
			)

		return (
			<li key={item.name}>
				<Link key={item.id} className={s.link} href={item.to}>
					{item.name}
				</Link>
			</li>
		)
	}

	return (
		<nav className={clsx(s.nav, className)}>
			<ul className={s.navList}>{getHeaderNav(nav).map((item) => getNavItem(item))}</ul>
		</nav>
	)
}
