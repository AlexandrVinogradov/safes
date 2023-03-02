import Image from 'next/image'
import { Noto_Sans } from '@next/font/google'
import Link from 'next/link'
import { ReactNode } from 'react'
import clsx from 'clsx'
// import styles from './page.module.css'

const font = Noto_Sans({ weight: '400', variable: '--font-inter' })

type PropsTypes = {
	children: ReactNode
	className?: string
	type: 'outlined' | 'filled'
}
const Button = (props: PropsTypes) => {
	const { children, className, type } = props

	const s = {
		button: 'inline-flex justify-center items-center bg-branded rounded-sm w-[154px] h-[42px] font-semibold',
	}
	console.log(className)
	console.log('ij')

	return <button className={clsx(className)}>{children}</button>
}

const HeaderUpElements = () => {
	const s = {
		mainWrapper: 'flex justify-between items-center pb-[14px]',

		search: 'flex items-center max-w-[561px] w-full',
		searchInput: 'grow h-[38px] rounded-[3px] border border-[#9BD9FE] pl-5 mr-[5px]',
		searchButton: 'h-[38px] border border-branded rounded-[3px] w-[96px]', // FIXME:

		contactsWrapper: 'flex max-w-[400px] w-full justify-between',
		contacts: 'flex',
		schedule: 'mr-2.5',
		phoneLink: 'block',
		contactIcons: 'flex justify-between items-center max-w-[91px] w-full',
	}
	return (
		<div className={s.mainWrapper}>
			<Image src="/logoIcon.svg" alt="Промметсейф Logo" width={318} height={77} priority />

			<div className={s.search}>
				<input className={s.searchInput} type="text" placeholder="Введите текст поиска..." />
				<button className={s.searchButton}>Поиск</button>
			</div>

			<div className={s.contactsWrapper}>
				<div className={s.contacts}>
					<div className={s.schedule}>
						<p>Пн - Вс:</p>
						<p> 9.00 до 21.00</p>
					</div>

					<div>
						<a className={s.phoneLink} href="tel:84956415518">
							8 (495) 641-55-18
						</a>
						<a className={s.phoneLink} href="tel:89265878650">
							8 (926) 587-86-50
						</a>
					</div>
				</div>

				<div className={s.contactIcons}>
					<a href="tel:89265878650">
						<Image src="/phoneIcon.svg" alt="Позвоните нам" width={22} height={22} priority />
					</a>

					<a className="block" href="tel:89265878650">
						<Image src="/mailIcon.svg" alt="Напишите нам" width={27} height={20} priority />
					</a>
				</div>
			</div>
		</div>
	)
}

const HeaderLowElements = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center w-full">
				<Button type="filled" className="text-red">
					<Image className="mr-[13px]" src="/menuIcon.svg" alt="Каталог" width={18} height={16} priority />
					Каталог
				</Button>
				{/* <button className="bg-branded inline-flex items-center py-[10px] pl-[29.5px] pr-[26px] mr-[41px] rounded-sm font-bold">
					<Image className="mr-[13px]" src="/menuIcon.svg" alt="Каталог" width={18} height={16} priority />
					Каталог
				</button> */}
				<nav className="w-full max-w-[806px]">
					<ul className="flex justify-between">
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
							<button className="inline-flex items-center">
								Производители
								<Image className="ml-[5px]" src="/arrowDownIcon.svg" alt="Производители" width={11} height={9} priority />
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

			<button className="flex items-center justify-end max-w-[200px] w-full">
				<Image className="mr-2.5" src="/basketIcon.svg" alt="Корзина" width={30} height={30} priority />
				<p className="">250 000 руб.</p>
			</button>
		</div>
	)
}

export default function Home() {
	return (
		<main className={`${font.variable} font-sans`}>
			<header className="bg-dark px-5 pt-[15px] pb-[11px] text-white">
				<HeaderUpElements />
				<HeaderLowElements />
			</header>
		</main>
	)
}
