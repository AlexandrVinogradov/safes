import { useState } from 'react'
import { container } from '@/styles/container'
import clsx from 'clsx'
import { s } from './styles'
import { AttentionIcon } from '@/icons/AttentionIcon'
import { TabButton } from './TabButton/TabButton'
import { getTabContent } from './helpers/getTabContent'

type PropsType = {
	description: string | undefined
}

export type TabsType = 'char' | 'desc' | 'video' | 'delivery'

export const DescriptionSection = (props: PropsType) => {
	const { description } = props
	const [selectedTab, setSelectedTab] = useState<TabsType>('char')

	if (!description) return null

	const commonMatch = description.match(/{\/tabs}([\s\S]*)$/)
	const common = commonMatch ? commonMatch[1] : ''

	// valberg-zaslon-el {tab Замок}

	const getTabContentString = (tab: TabsType) => {
		// TODO: <p><span>{tab Замок} {module Инструкция к замку PS300}</span></p>
		if (tab === 'char') return charContent
		if (tab === 'desc') return descContent
		if (tab === 'video') return videoContent
		if (tab === 'delivery') return delN
		return ''
	}

	const charContent = getTabContent('{tab Характеристики}', description)
	const descContent = getTabContent('{tab Описание}', description)
	const videoContent = getTabContent('<p>{tab Видео}', description)?.replace('</p>', '')
	const delN = '<p>Тут будет доставка</p>'

	return (
		<section className={s.section}>
			<div>
				<div className={clsx(s.tabButtons, container)}>
					<TabButton
						tabName="char"
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
						hasContent={!!charContent}
						title="Характеристики"
					/>
					<TabButton
						tabName="desc"
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
						hasContent={!!descContent}
						title="Описание"
					/>
					<TabButton
						tabName="video"
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
						hasContent={!!videoContent}
						title="Видео"
					/>
					<TabButton
						tabName="delivery"
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
						hasContent={!!delN}
						title="Доставка"
					/>
				</div>

				<div className={s.tabContentWrapper}>
					<div className={clsx(s.tabContent, container)} dangerouslySetInnerHTML={{ __html: getTabContentString(selectedTab) }} />
				</div>
			</div>

			<div className={clsx(container, s.common)}>
				<AttentionIcon className={s.attentionIcon} />
				<div dangerouslySetInnerHTML={{ __html: common }} />
			</div>

			{/* <div className="mt-5">{description}</div> */}
		</section>
	)
}
