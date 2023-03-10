'use client'
import { Tenor_Sans, Noto_Sans } from '@next/font/google'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ArticlesSection } from './sections/ArticlesSection/ArticlesSection'
import { BannerSection } from './sections/BannerSection/BannerSection'
import { BrandsSection } from './sections/BrandsSection/BrandsSection'
import { NoveltiesSection } from './sections/NoveltiesSection/NoveltiesSection'

const noto_sans = Noto_Sans({
	weight: '400',
	variable: '--font-noto-sans',
	display: 'swap',
})

const tenor_sans = Tenor_Sans({
	weight: '400',
	variable: '--font-tenor-sans',
	display: 'swap',
})

// svg via Icon
// Logo link
// Brands container
// Card center img

export default function Home() {
	return (
		<main className={`${noto_sans.variable} ${tenor_sans.variable}`}>
			<Header />
			<BannerSection />
			<NoveltiesSection />
			<BrandsSection />
			<ArticlesSection />
			<Footer />
		</main>
	)
}
