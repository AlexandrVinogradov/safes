import { ProductCardType } from '@/models/IProductStore'
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
	productsList: ProductCardType[]
}

const MainPage: NextPage<PropsType> = ({ productsList }) => {
	return (
		<Layout title="Main">
			<main>
				<BannerSection />
				<CategoriesSliderSection />
				<ProductsSection productsList={productsList} />
				<HowToChoose />
				<NoveltiesSection productsList={productsList} />
				<BrandsSection />
				<ArticlesSection title="Статьи" className="py-[120px]" />
			</main>
		</Layout>
	)
}

export default MainPage
