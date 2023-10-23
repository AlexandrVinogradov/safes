import { container } from '@/styles/container'
import { ArticlesSliderContainer } from './ArticlesSlider/ArticlesSliderContainer'
import { s } from './styles'
import clsx from 'clsx'
import { NewsType } from '@/models/INewsStore'
import { Button } from '@/components/Button/Button'

type PropsType = {
	className?: string
	title: string
	news: NewsType[]
}

export const ArticlesSection = (props: PropsType) => {
	const { className, title, news } = props

	return (
		<section className={clsx(s.section, className)}>
			<div className={clsx(container)}>
				<h2 className={s.title}>{title}</h2>
				<ArticlesSliderContainer news={news} />
				<Button className={s.button} href="/information">
					Все статьи
				</Button>
			</div>
		</section>
	)
}
