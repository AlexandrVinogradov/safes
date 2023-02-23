import Image from 'next/image'
import { Noto_Sans } from '@next/font/google'
// import styles from './page.module.css'

const font = Noto_Sans({ weight: '400', variable: '--font-inter' })

export default function Home() {
	return (
		<main className={`${font.variable} font-sans`}>
			<header className="bg-[#424242] px-5 pt-[15px] pb-[11px]">
				<div className="flex justify-between items-center">
					<Image src="/logo.svg" alt="Промметсейф Logo" width={318} height={77} priority />

					<div className="flex items-center max-w-[561px] w-full">
						<input
							className="grow h-[38px] rounded-[3px] border border-[#9BD9FE] pl-5 mr-[5px]"
							type="text"
							placeholder="Введите текст поиска..."
						/>
						<button className="h-[38px] border border-[#40A3D2] text-white rounded-[3px] w-[96px]">Поиск</button>
					</div>

					<div className="flex max-w-[400px] w-full justify-between text-white">
						<div className="flex">
							<div className="mr-2.5">
								<p>Пн - Вс:</p>
								<p> 9.00 до 21.00</p>
							</div>

							<div>
								<a className="block" href="tel:84956415518">
									8 (495) 641-55-18
								</a>
								<a className="block" href="tel:89265878650">
									8 (926) 587-86-50
								</a>
							</div>
						</div>

						<div className="flex justify-between items-center max-w-[91px] w-full">
							<a href="tel:89265878650">
								<Image src="/phone.svg" alt="Позвоните нам" width={22} height={22} priority />
							</a>

							<a className="block" href="tel:89265878650">
								<Image src="/mail.svg" alt="Напишите нам" width={27} height={20} priority />
							</a>
						</div>
					</div>
				</div>
			</header>
		</main>
	)
}
