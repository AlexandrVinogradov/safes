import { Tenor_Sans, Noto_Sans } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { ReactNode } from 'react'
import { Meta } from '../Meta/Meta'
import { MetaType } from '../Meta/IMeta'

const noto_sans = Noto_Sans({
	weight: ['400', '700'],
	variable: '--font-noto-sans',
	display: 'auto',
	subsets: [
		// FIXME: delete comments
		// 'cyrillic',
		'latin',
	],
})

const tenor_sans = Tenor_Sans({
	weight: '400',
	variable: '--font-tenor-sans',
	display: 'auto',
	subsets: [
		// 'cyrillic',
		'latin',
	],
})

type PropsType = {
	children: ReactNode
}

export const Layout = (props: PropsType & MetaType) => {
	const { children, title, description } = props

	return (
		<Meta title={title} description={description}>
			<div className={`${noto_sans.variable} ${tenor_sans.variable} app_wrapper`}>
				<Header />
				{children}
				<Footer />
			</div>
		</Meta>
	)
}
