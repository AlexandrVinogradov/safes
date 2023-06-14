import { ArticlesSection } from './mainPageSections/ArticlesSection/ArticlesSection'
import { BannerSection } from './mainPageSections/BannerSection/BannerSection'
import { BrandsSection } from './mainPageSections/BrandsSection/BrandsSection'
import { CategoriesSliderSection } from './mainPageSections/CategoriesSliderSection/CategoriesSliderSection'
import { HowToChoose } from './mainPageSections/HowToChoose/HowToChoose'
import { NoveltiesSection } from './mainPageSections/NoveltiesSection/NoveltiesSection'
import { ProductsSection } from './mainPageSections/ProductsSection/ProductsSection'

// Brands container

export default function Home() {
	return (
		<main>
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
