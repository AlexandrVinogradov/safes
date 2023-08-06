import { ReactNode } from 'react'
import Image from 'next/image'
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs'
import { BreadCrumbsType } from '../BreadCrumbs/type'
import { s } from './styles'

type PropsType = {
	children: ReactNode
	breadCrumbs: BreadCrumbsType
	isShowShield?: boolean
}

export const Main = (props: PropsType) => {
	const { breadCrumbs, children, isShowShield = false } = props

	return (
		<main className={s.main}>
			{isShowShield && <Image src="/semiShieldMain.png" alt="логотип ПРОММЕТСЕЙФ" width="352" height="941" className={s.image} />}

			<BreadCrumbs breadCrumbs={breadCrumbs} />
			{children}
		</main>
	)
}
