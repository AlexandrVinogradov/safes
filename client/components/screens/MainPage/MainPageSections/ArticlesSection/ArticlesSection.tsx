import { container } from '@/styles/container'
import { ArticlesSliderContainer } from './ArticlesSlider/ArticlesSliderContainer'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	className?: string
	title: string
}

export const ArticlesSection = (props: PropsType) => {
	const { className, title } = props

	return (
		<section className={clsx(s.section, className)}>
			<div className={container}>
				<h2 className={s.title}>{title}</h2>
				<ArticlesSliderContainer />
			</div>
		</section>
	)
}
