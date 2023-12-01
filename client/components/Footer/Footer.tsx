import { container } from '@/styles/container'
import Link from 'next/link'
import clsx from 'clsx'
import { s } from './styles'
import { Contacts } from '../Contacts/Contacts'
import { LogoIcon } from '@/icons/LogoIcon'
import { TelegramIcon } from '@/icons/TelegramIcon'
import { YouTubeIcon } from '@/icons/YouTubeIcon'
import { VkIcon } from '@/icons/VkIcon'
import { nav } from '@/constants/nav'

export const Footer = () => {
	const iconLinks = [
		{ name: 'vk', to: 'https://www.vk.com', icon: <VkIcon /> },
		{ name: 'yt', to: 'https://www.youtube.com/', icon: <YouTubeIcon /> },
		{ name: 'tg', to: 'https://t.me/+79265878650', icon: <TelegramIcon /> },
	]

	return (
		<footer className={s.footer}>
			<div className={clsx(container, s.mainFooter)}>
				<div>
					<LogoIcon className={s.logo} />
					<Contacts className={s.contacts} />
				</div>

				<nav className={s.nav}>
					<ul className={s.navList}>
						{nav.map((link) => (
							<li key={link.name}>
								<Link className={s.navLink} href={link.to}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link href="/policies" className={clsx(s.secondaryLink, s.navLink)}>
					Политика конфиденциальности
				</Link>

				<p className={clsx(s.secondaryLink, s.rights)}>© 2023 Купить сейф в Москве. All Rights Reserved.</p>

				<div className={s.icons}>
					{iconLinks.map((link) => (
						<a target="_blank" className={s.icon} key={link.name} rel="noreferrer" href={link.to}>
							{link.icon}
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}
