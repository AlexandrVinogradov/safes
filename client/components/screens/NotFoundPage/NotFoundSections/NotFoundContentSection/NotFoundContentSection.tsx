import { CatalogRedirectMessage } from '@/components/CatalogRedirectMessage/CatalogRedirectMessage'
import { container } from '@/styles/container'
import clsx from 'clsx'
import Image from 'next/image'
import { s } from './styles'

export const NotFoundContentSection = () => {
	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>К сожалению такой страницы не существует</h1>

			<div className={s.imageWrapper}>
				<Image
					src="/404.png"
					alt="Страница не найдена"
					fill
					className={s.image}
					quality={100}
				/>
			</div>

			<CatalogRedirectMessage />
		</section>
	)
}
