import { container } from '@/app/styles/container'
import Link from 'next/link'
import clsx from 'clsx'
import { s } from './styles'
import { Contacts } from '../Contacts/Contacts'
import { LogoIcon } from '@/app/icons/LogoIcon'
import { TelegramIcon } from '@/app/icons/TelegramIcon'
import { YouTubeIcon } from '@/app/icons/YouTubeIcon'
import { VkIcon } from '@/app/icons/VkIcon'

export const Footer = () => {
	const nav = [
		{ name: 'Каталог', to: '/catalog' },
		{ name: 'О компании', to: '/company' },
		{ name: 'Информация', to: '/info' },
		{ name: 'Инструкции', to: '/instruction' },
		{ name: 'Производители', to: '/manufacturers' },
		{ name: 'Доставка и оплата', to: '/delivery' },
		{ name: 'Контакты', to: '/contacts' },
	]

	const iconLinks = [
		{ name: 'vk', to: 'https://www.vk.com', icon: <VkIcon /> },
		{ name: 'yt', to: 'https://www.youtube.com/', icon: <YouTubeIcon /> },
		{ name: 'tg', to: 'https://web.telegram.org/k/', icon: <TelegramIcon /> },
	]

	console.log(iconLinks.map((el) => el.icon))

	return (
		<footer className={s.footer}>
			<div className={clsx(container, s.mainFooter)}>
				<div>
					<LogoIcon className={s.logo} />
					<Contacts />
				</div>

				<nav className="col-span-2">
					<ul className={s.navList}>
						{nav.map((link) => (
							<li key={link.name}>
								<Link className="whitespace-nowrap" href={link.to}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<p className={s.secondaryLink}>Политика конфиденциальности</p>
				<p className={s.secondaryLink}>© 2023 Купить сейф в Москве. All Rights Reserved.</p>

				<div className={s.icons}>
					{iconLinks.map((link) => (
						<a target="_blank" key={link.name} href={link.to}>
							{link.icon}
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}
