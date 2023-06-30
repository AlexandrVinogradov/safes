import { useState } from 'react'
import { container } from '@/styles/container'
import clsx from 'clsx'
import { s } from './styles'
import { AttentionIcon } from '@/icons/AttentionIcon'

type PropsType = {
	description: string | undefined
}

type TabsType = 'char' | 'desc' | 'video' | 'delivery' | 'delivery'

export const DescriptionSection = (props: PropsType) => {
	const { description } = props
	const [selectedTab, setSelectedTab] = useState<TabsType>('char')

	if (!description) return null

	const characteristicMatch = description.match(/{tab Характеристики}<\/p>([\s\S]*?)<div style="text-align: justify;">{tab Описание}/)
	const char = characteristicMatch ? characteristicMatch[1] : ''
	const descMatch = description.match(/{tab Описание}<\/div>([\s\S]*?){tab Видео}/)
	const desc = descMatch ? descMatch[1] : ''
	const videoMatch = description.match(/{tab Видео}([\s\S]*?){tab Доставка}{module Доставка}/)
	const video = videoMatch ? videoMatch[1] : ''
	const commonMatch = description.match(/{\/tabs}([\s\S]*)$/)
	const common = commonMatch ? commonMatch[1] : ''

	const getTabContentString = (tab: TabsType) => {
		if (tab === 'char') return char
		if (tab === 'desc') return desc
		if (tab === 'video') return video
		if (tab === 'delivery') return ''
		return ''
	}

	return (
		<section className={s.section}>
			<div>
				<div className={clsx(s.tabButtons, container)}>
					<button
						className={clsx([s.tabButton, selectedTab === 'char' && s.activeTabButton])}
						onClick={() => setSelectedTab('char')}
					>
						Характеристики
					</button>
					<button
						className={clsx([s.tabButton, selectedTab === 'desc' && s.activeTabButton])}
						onClick={() => setSelectedTab('desc')}
					>
						Описание
					</button>
					<button
						className={clsx([s.tabButton, selectedTab === 'video' && s.activeTabButton])}
						onClick={() => setSelectedTab('video')}
					>
						Видео
					</button>
					<button
						className={clsx([s.tabButton, selectedTab === 'delivery' && s.activeTabButton])}
						onClick={() => setSelectedTab('delivery')}
					>
						Доставка
					</button>
				</div>

				<div className={s.tabContentWrapper}>
					<div className={clsx(s.tabContent, container)} dangerouslySetInnerHTML={{ __html: getTabContentString(selectedTab) }} />
				</div>
			</div>

			<div className={clsx(container, s.common)}>
				<AttentionIcon className={s.attentionIcon} />
				<div dangerouslySetInnerHTML={{ __html: common }} />
			</div>
		</section>
	)
}
