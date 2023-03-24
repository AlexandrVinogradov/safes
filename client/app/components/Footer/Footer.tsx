import { container } from '@/app/styles/container'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { s } from './styles'
import { Contacts } from '../Contacts/Contacts'

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
		{ name: 'vk', to: '/', alt: 'Наш ВК', iconSrc: '/vkIcon.svg' },
		{ name: 'yt', to: '/', alt: 'Наш Youtube', iconSrc: '/youtubeIcon.svg' },
		{ name: 'tg', to: '/', alt: 'Наш Telegram', iconSrc: '/telegramIcon.svg' },
	]

	return (
		<footer className={s.footer}>
			<div className={clsx(container, s.mainFooter)}>
				<div>
					<Image className={s.logo} src="/logoIcon.svg" alt="Прометсейф Logo" width={318} height={77} priority />
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
						<Link key={link.name} href={link.to}>
							<Image src={link.iconSrc} alt={link.alt} width={26.31} height={26.31} priority />
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}
