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
import { NewsType } from '@/models/INewsStore'
import { s } from './styles'

// Brands container

type PropsType = {
	productsList: ProductCardType[]
	news: NewsType[]
}

const MainPage: NextPage<PropsType> = ({ productsList, news }) => {
	return (
		<Layout title="Main">
			<main>
				<BannerSection />
				<CategoriesSliderSection />
				<ProductsSection productsList={productsList} />
				<HowToChoose />
				<NoveltiesSection productsList={productsList} />
				<BrandsSection />
				<ArticlesSection title="Статьи" className={s.articleSection} news={news} />
			</main>
		</Layout>
	)
}

export default MainPage
