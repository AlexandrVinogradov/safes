'use client'
import { Noto_Sans } from '@next/font/google'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { BannerSection } from './sections/BannerSection/BannerSection'

const font = Noto_Sans({ weight: '400', variable: '--font-inter' })

export default function Home() {
	return (
		<main className={`${font.variable} font-sans`}>
			<Header />
			<BannerSection />
			<Footer />
		</main>
	)
}
