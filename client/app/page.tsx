'use client'
// import { Tenor_Sans, Noto_Sans } from '@next/font/google'
import { ArticlesSection } from './mainPageSections/ArticlesSection/ArticlesSection'
import { BannerSection } from './mainPageSections/BannerSection/BannerSection'
import { BrandsSection } from './mainPageSections/BrandsSection/BrandsSection'
import { CategoriesSliderSection } from './mainPageSections/CategoriesSliderSection/CategoriesSliderSection'
import { HowToChoose } from './mainPageSections/HowToChoose/HowToChoose'
import { NoveltiesSection } from './mainPageSections/NoveltiesSection/NoveltiesSection'
import { ProductsSection } from './mainPageSections/ProductsSection/ProductsSection'

// Brands container
// double fonts


// const noto_sans = Noto_Sans({
// 	weight: '400',
// 	variable: '--font-noto-sans',
// 	display: 'swap',
// 	subsets: ['latin'],
// })

// const tenor_sans = Tenor_Sans({
// 	weight: '400',
// 	variable: '--font-tenor-sans',
// 	display: 'swap',
// 	subsets: ['latin'],
// })

export default function Home() {
	return (
		<main
		// className={`${noto_sans.variable} ${tenor_sans.variable}`}
		>
			<BannerSection />
			<CategoriesSliderSection />
			<ProductsSection />
			<HowToChoose />
			<NoveltiesSection />
			<BrandsSection />
			<ArticlesSection />
		</main>
	)
}
