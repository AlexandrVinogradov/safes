import Image from 'next/image'
import ellipsisStyle from './Ellipsis.module.scss'
import { NewsType } from '@/models/INewsStore'
import Link from 'next/link'
import clsx from 'clsx'
import { s } from './styles'

type PropsType = {
	slide: NewsType
}

export const ArticleSlide = (props: PropsType) => {
	const { slide } = props
	const { title, fakeDate, previewHtml, alias } = slide

	return (
		<article className={s.articleWrapper}>
			<Link href={`/information/${alias}`} className={s.link}>
				<Image className={s.preview} alt={title} src="/articlePreview1.jpg" fill />
			</Link>

			<article className={s.articleContent}>
				<header className={s.header}>
					<p>{fakeDate}</p>
				</header>
				<h3 className={s.title}>{title}</h3>
				<div className={clsx(s.desc, ellipsisStyle.descr)} dangerouslySetInnerHTML={{ __html: previewHtml }} />
			</article>
		</article>
	)
}
