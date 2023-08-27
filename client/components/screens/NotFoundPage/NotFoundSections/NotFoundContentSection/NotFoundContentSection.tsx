import { CatalogRedirectMessage } from '@/components/CatalogRedirectMessage/CatalogRedirectMessage'
import { container } from '@/styles/container'
import clsx from 'clsx'
import Image from 'next/image'
import { s } from './styles'

export const NotFoundContentSection = () => {
	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>К сожалению такой страницы не существует</h1>
			<Image src="/404.png" alt="Страница не найдена" width="626" height="214" className={s.image} quality={100} />
			<CatalogRedirectMessage />
		</section>
	)
}
