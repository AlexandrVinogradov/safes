import Image from 'next/image'
import clsx from 'clsx'
import { container } from '@/styles/container'
import styles from './NewsSection.module.scss'
import { s } from './styles'

type PropsType = {
	fullHtml: string
	title: string
	fakeDate: string
	image: string
}

export const NewsSection = (props: PropsType) => {
	const { fullHtml, title, fakeDate, image } = props

	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>{title}</h1>
			<p className={s.date}>{fakeDate}</p>

			<Image
				unoptimized={true}
				src="/articlePreview1.jpg"
				alt={`Статья ${title}`}
				width="0"
				height="0"
				className={s.image}
				quality={100}
			/>

			<div className={styles.content} dangerouslySetInnerHTML={{ __html: fullHtml }} />
		</section>
	)
}
