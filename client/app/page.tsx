'use client'
import { Tenor_Sans, Noto_Sans } from '@next/font/google'
import { useEffect } from 'react'
import { Cookies } from './components/Cookies/Cookies'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { RequestCallModal } from './Modals/RequestCallModal/RequestCallModal'
import { ArticlesSection } from './sections/ArticlesSection/ArticlesSection'
import { BannerSection } from './sections/BannerSection/BannerSection'
import { BrandsSection } from './sections/BrandsSection/BrandsSection'
import { CategoriesSliderSection } from './sections/CategoriesSliderSection/CategoriesSliderSection'
import { HowToChoose } from './sections/HowToChoose/HowToChoose'
import { NoveltiesSection } from './sections/NoveltiesSection/NoveltiesSection'
import { ProductsSection } from './sections/ProductsSection/ProductsSection'
import { useAppStore } from './store/store'

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

export default function Home() {
	return (
		<main className={`${noto_sans.variable} ${tenor_sans.variable}`}>
			{/* <RequestCallModal /> */}

			<Header />
			{/* <BannerSection /> */}
			{/* <CategoriesSliderSection /> */}
			<ProductsSection />
			{/* <HowToChoose /> */}
			{/* <NoveltiesSection /> */}
			{/* <BrandsSection /> */}
			{/* <ArticlesSection /> */}
			<Footer />
			{/* <Cookies /> */}
			<div id="portal" />
		</main>
	)
}
