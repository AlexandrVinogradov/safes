import Link from 'next/link'
import { Fragment } from 'react'
import { s } from './styles'
import { BreadCrumbsType } from './type'

type PropsType = {
	breadCrumbs: BreadCrumbsType
}

export const BreadCrumbs = (props: PropsType) => {
	const { breadCrumbs } = props

	return (
		<div className={s.bradCrumbs}>
			{breadCrumbs.map((el, id) => (
				<Fragment key={id}>
					{!el.isActive ? (
						<Link href={el.to ?? '/'}>
							{el.name}
							<span className={s.slash}>/</span>
						</Link>
					) : (
						<span className={s.activeCrumb}>{el.name}</span>
					)}
				</Fragment>
			))}
		</div>
	)
}
