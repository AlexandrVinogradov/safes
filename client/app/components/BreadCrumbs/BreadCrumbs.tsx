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
						<>
							<Link className={s.link} href={el.to ?? '/'}>
								{el.name}
							</Link>
							<span className={s.slash}>/</span>
						</>
					) : (
						<span className={s.activeCrumb}>{el.name}</span>
					)}
				</Fragment>
			))}
		</div>
	)
}
