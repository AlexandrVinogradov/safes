import { Main } from '../../Main/Main'
import { Layout } from '@/components/layout/layout'
import { container } from '@/styles/container'
import { InstructionCategoryType } from '@/models/IInstructionsStore'
import { InstructionsIcon } from '@/icons/InstructionsIcon'
import { Button } from '@/components/Button/Button'
import { ContentType } from '@/models/IContentStore'
import { s } from './styles'

type PropsType = {
	instructionCategories: InstructionCategoryType[]
	content: ContentType
}

const InstructionCategoriesPage = (props: PropsType) => {
	const { instructionCategories, content } = props
	const { title, metadesc, metakey } = content

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Инструкции', isActive: true },
	]

	return (
		<Layout title={title} description={metadesc} keywords={metakey}>
			<Main breadCrumbs={breadCrumbs} isShowShield>
				<section className={container}>
					<h1 className={s.title}>{title}</h1>

					<ul className={s.list}>
						{instructionCategories.map((el) => (
							<li key={el.id} className={s.listItem}>
								<InstructionsIcon className={s.icon} />

								<div>
									<p className={s.categoryTitle}>{el.title}</p>

									<Button className={s.button} href={`/instruction/${el.alias}`}>
										Подробнее...
									</Button>
								</div>
							</li>
						))}
					</ul>
				</section>
			</Main>
		</Layout>
	)
}

export default InstructionCategoriesPage
