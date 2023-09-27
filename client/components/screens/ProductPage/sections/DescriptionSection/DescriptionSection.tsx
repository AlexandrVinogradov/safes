import { useEffect, useState } from 'react'
import { container } from '@/styles/container'
import clsx from 'clsx'
import { s } from './styles'
import { convert } from 'html-to-text'
import { AttentionIcon } from '@/icons/AttentionIcon'

type PropsType = {
	description: string | undefined
}

type TabsType = 'char' | 'desc' | 'video' | 'delivery' | 'delivery'

export const DescriptionSection = (props: PropsType) => {
	const { description } = props
	const [selectedTab, setSelectedTab] = useState<TabsType>('char')

	if (!description) return null

	// console.log(description)

	const characteristicMatch = description.match(/{tab Характеристики}<\/p>([\s\S]*?)<div style="text-align: justify;">{tab Описание}/)
	const char = characteristicMatch ? characteristicMatch[1] : ''
	const descMatch = description.match(/{tab Описание}<\/div>([\s\S]*?){tab Видео}/)
	const desc = descMatch ? descMatch[1] : ''
	const videoMatch = description.match(/{tab Видео}([\s\S]*?){tab Доставка}{module Доставка}/)
	const video = videoMatch ? videoMatch[1] : ''
	const commonMatch = description.match(/{\/tabs}([\s\S]*)$/)
	const common = commonMatch ? commonMatch[1] : ''

	// const getTabContentString = (tab: TabsType) => {
	// 	if (tab === 'char') return char
	// 	if (tab === 'desc') return desc
	// 	if (tab === 'video') return video
	// 	if (tab === 'delivery') return ''
	// 	return ''
	// }

	// valberg-zaslon-el {tab Замок}

	const getTabContentString = (tab: TabsType) => {
		if (tab === 'char') return charN
		if (tab === 'desc') return desN
		if (tab === 'video') return vidN
		if (tab === 'delivery') return ''
		return ''
	}

	const getSub = (startIndex: number, endIndex: number, fullStr: string) => {
		if (startIndex !== -1 && endIndex !== -1) {
			const sub = fullStr.substring(startIndex, endIndex)
			return removeLastOpeningTag(removeFirstClosingTag(sub))
		} else {
			console.log('Подстрока не найдена.')
		}
	}

	function removeFirstClosingTag(inputString: string) {
		const closingTagMatch = inputString.match(/<\/[^>]+>/)
		if (closingTagMatch) {
			const closingTag = closingTagMatch[0]
			const startIndex = inputString.indexOf(closingTag)
			if (startIndex !== -1) {
				const updatedString = inputString.substring(0, startIndex) + inputString.substring(startIndex + closingTag.length)
				return updatedString
			}
		}
		return inputString
	}

	function removeLastOpeningTag(inputString: string) {
		const openingTagMatch = inputString.match(/<[^/][^>]*>[^<]*$/)
		if (openingTagMatch) {
			const openingTag = openingTagMatch[0]
			const endIndex = inputString.lastIndexOf(openingTag)
			if (endIndex !== -1) {
				const updatedString = inputString.substring(0, endIndex) + inputString.substring(endIndex + openingTag.length)
				return updatedString
			}
		}
		return inputString
	}

	function findNextOpeningBraceIndex(inputString: string, startIndex: number) {
		if (startIndex !== -1) {
			console.log(startIndex)

			const nextOpeningBraceIndex = inputString.indexOf('{', startIndex + 1)

			if (nextOpeningBraceIndex !== -1) {
				return nextOpeningBraceIndex
			}
		}
		return -1 // Если заданный паттерн не найден или следующий '{' не найден
	}

	const charStr = '{tab Характеристики}'
	const charStartIndex = description.indexOf(charStr) + charStr.length
	const charEndIndex = findNextOpeningBraceIndex(description, charStartIndex)

	let desStr = '{tab Описание}'
	const desStartIndex = description.indexOf(desStr) + desStr.length
	const desEndIndex = findNextOpeningBraceIndex(description, desStartIndex)

	let vidStr = '<p>{tab Видео}'
	const vidStartIndex = description.indexOf(vidStr) + vidStr.length
	const vidEndIndex = findNextOpeningBraceIndex(description, vidStartIndex)

	const charN = getSub(charStartIndex, charEndIndex, description)
	const desN = getSub(desStartIndex, desEndIndex, description)
	const vidN = getSub(vidStartIndex, vidEndIndex, description)?.replace('</p>', '')

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

			{/* <div className="mt-5">{charN}</div>
			<div className="mt-5">{desN}</div>
			<div className="mt-5">{vidN}</div>
			<div className="mt-5">{common}</div>
			<div className="mt-5">{description}</div> */}
		</section>
	)
}
