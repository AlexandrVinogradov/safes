import { ArrowDownIcon } from '@/icons/ArrowDownIcon'
import type { CollapseProps } from 'antd'
import { Collapse as AntCollapse } from 'antd'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	items: CollapseProps['items']
	className: string
}

export const Collapse = (props: PropsType) => {
	const { items, className } = props

	return (
		<AntCollapse
			className={clsx(s.collapse, className)}
			expandIcon={({ isActive }) => <ArrowDownIcon className={clsx(s.arrowIcon, isActive && s.activeArrowIcon)} />}
			accordion
			items={items}
			bordered={false}
		/>
	)
}
