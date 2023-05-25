import Image from 'next/image'
import { ArticleSlideType } from './IArticleSlide'
import { s } from './styles'

type PropsType = {
	slide: ArticleSlideType
}

export const ArticleSlide = (props: PropsType) => {
	const { slide } = props

	return (
		<article className={s.articleWrapper}>
			<Image className={s.preview} alt={slide.img.alt} src={slide.img.src} width={335} height={258} priority />

			<article className={s.articleContent}>
				<header className={s.header}>
					<p>{slide.date}</p>
				</header>
				<h3 className={s.title}>{slide.title}</h3>
				<p className={s.desc}>{slide.desc}</p>
			</article>
		</article>
	)
}
