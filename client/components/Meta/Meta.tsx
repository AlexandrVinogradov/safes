import { FC, PropsWithChildren } from 'react'
import { MetaType } from './IMeta'
import Head from 'next/head'

const getTitle = (title: string) => {
	return `${title} | Kek`
}
export const Meta: FC<PropsWithChildren<MetaType>> = ({ title, description, keywords, children }) => {
	return (
		<>
			<Head>
				<title>{getTitle(title)}</title>

				{description ? (
					<>
						<meta name="description" content={description} />
						<meta name="og:title" content={getTitle(title)} />
						<meta name="og:description" content={description} />
						<meta name="keywords" content={keywords} />
					</>
				) : (
					<meta name="roots" content="noindex nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}
