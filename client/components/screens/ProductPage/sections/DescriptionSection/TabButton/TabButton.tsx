import clsx from 'clsx'
import { TabsType } from '../DescriptionSection'
import { s } from './styles'

type PropsType = {
	tabName: TabsType
	selectedTab: TabsType
	setSelectedTab: (selectedTab: TabsType) => void
	hasContent: boolean
	title: string
}

export const TabButton = (props: PropsType) => {
	const { selectedTab, setSelectedTab, hasContent, title, tabName } = props

	if (!hasContent) return null

	return (
		<button className={clsx([s.tabButton, selectedTab === tabName && s.activeTabButton])} onClick={() => setSelectedTab(tabName)}>
			{title}
		</button>
	)
}
