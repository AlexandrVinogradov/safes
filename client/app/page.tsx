'use client'
// import { Tenor_Sans, Noto_Sans } from '@next/font/google'
import { ArticlesSection } from './sections/ArticlesSection/ArticlesSection'
import { BannerSection } from './sections/BannerSection/BannerSection'
import { BrandsSection } from './sections/BrandsSection/BrandsSection'
import { CategoriesSliderSection } from './sections/CategoriesSliderSection/CategoriesSliderSection'
import { HowToChoose } from './sections/HowToChoose/HowToChoose'
import { NoveltiesSection } from './sections/NoveltiesSection/NoveltiesSection'
import { ProductsSection } from './sections/ProductsSection/ProductsSection'

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
