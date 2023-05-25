import { Tenor_Sans, Noto_Sans } from '@next/font/google'
import { Cookies } from '@/app/components/Cookies/Cookies'
import { Footer } from '@/app/components/Footer/Footer'
import { Header } from '@/app/components/Header/Header'
import './globals.css'

const noto_sans = Noto_Sans({
	weight: ['400', '700'],
	variable: '--font-noto-sans',
	display: 'swap',
	subsets: ['cyrillic', 'latin'],
})

const tenor_sans = Tenor_Sans({
	weight: '400',
	variable: '--font-tenor-sans',
	display: 'swap',
	subsets: ['cyrillic', 'latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru" className={`${noto_sans.variable} ${tenor_sans.variable}`}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />

			<body>
				<Header />
				{children}
				<Footer />
				{/* <Cookies /> */}

				<div id="portal" />
			</body>
		</html>
	)
}
