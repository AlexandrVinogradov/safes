import { ServerProductCardType } from '@/models/IProductStore'
import { Layout } from '../../layout/layout'
import { ArticlesSection } from './MainPageSections/ArticlesSection/ArticlesSection'
import { BannerSection } from './MainPageSections/BannerSection/BannerSection'
import { BrandsSection } from './MainPageSections/BrandsSection/BrandsSection'
import { CategoriesSliderSection } from './MainPageSections/CategoriesSliderSection/CategoriesSliderSection'
import { HowToChoose } from './MainPageSections/HowToChoose/HowToChoose'
import { NoveltiesSection } from './MainPageSections/NoveltiesSection/NoveltiesSection'
import { ProductsSection } from './MainPageSections/ProductsSection/ProductsSection'
import { NextPage } from 'next/types'

// Brands container

type PropsType = {
	products: ServerProductCardType[]
}

const MainPage: NextPage<PropsType> = ({ products }) => {
	return (
		<Layout title="Main">
			<main>
				<BannerSection />
				<CategoriesSliderSection />
				<ProductsSection products={products} />
				<HowToChoose />
				<NoveltiesSection products={products} />
				<BrandsSection />
				<ArticlesSection />
			</main>
		</Layout>
	)
}

export default MainPage
