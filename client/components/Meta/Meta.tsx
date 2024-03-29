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
				{/* for disable zoom onFocus input */}
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

				{description ? (
					<>
						{/* TODO: meta tag for disable SEO */}
						<meta name="robots" content="noindex, nofollow" />
						{/* TODO: meta tag for disable SEO */}

						<meta name="description" content={description} />
						<meta name="og:title" content={getTitle(title)} />
						<meta name="og:description" content={description} />
						<meta name="keywords" content={keywords} />
					</>
				) : (
					//  TODO: meta tag for disable SEO
					<meta name="roots" content="noindex nofollow" />
					//  TODO: meta tag for disable SEO
				)}
			</Head>
			{children}
		</>
	)
}
