import { ReactNode } from 'react'
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs'
import { BreadCrumbsType } from '../BreadCrumbs/type'
import { s } from './styles'

type PropsType = {
	children: ReactNode
	breadCrumbs: BreadCrumbsType
}

export const Main = (props: PropsType) => {
	const { breadCrumbs, children } = props

	return (
		<main className={s.main}>
			<BreadCrumbs breadCrumbs={breadCrumbs} />
			{children}
		</main>
	)
}
