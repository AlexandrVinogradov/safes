import { container } from '@/app/styles/container'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { s } from './styles'

export const NotFoundContentSection = () => {
	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>К сожалению такой страницы не существует</h1>
			<Image src="/404.jpg" alt="Страница не найдена" width="1110" height="380" className={s.image} />
			<p className={s.message}>
				Вы можете воспользоваться поиском или перейти в{' '}
				<Link className={s.link} href="/catalog">
					каталог
				</Link>
			</p>
		</section>
	)
}
