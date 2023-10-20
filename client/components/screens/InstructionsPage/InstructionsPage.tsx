import { Main } from '../../Main/Main'
import Image from 'next/image'
import { Layout } from '@/components/layout/layout'
import { container } from '@/styles/container'
import { InstructionsDataType } from '@/models/IInstructionsStore'
import { PdfIcon } from '@/icons/PdfIcon'
import { s } from './styles'

type PropsType = {
	instructionsData: InstructionsDataType
}

const InstructionsPage = (props: PropsType) => {
	const { instructionsData } = props
	const { instructions, instructionCategory } = instructionsData
	const { title, metadesc, metakey } = instructionCategory

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Инструкции', isActive: false, to: '/instruction' },
		{ name: title, isActive: true },
	]

	return (
		<Layout title={title} description={metadesc} keywords={metakey}>
			<Main breadCrumbs={breadCrumbs} isShowShield>
				<section className={container}>
					<h1 className={s.title}>{title}</h1>

					<ul>
						{instructions?.map((el) => (
							<li className={s.listItem} key={el.id}>
								<a target="_blan" className={s.link} href={`https://prommetsafe.ru/instructions/${el.link}`}>
									<div className={s.iconWithTitle}>
										<PdfIcon className={s.icon} />
										{el.name}
									</div>

									{el.image && (
										<Image
											unoptimized={true}
											src={`https://prommetsafe.ru/instructions/${el.image}`}
											alt={el.name}
											width="0"
											height="0"
											className={s.img}
										/>
									)}
								</a>
							</li>
						))}
					</ul>
				</section>
			</Main>
		</Layout>
	)
}

export default InstructionsPage
