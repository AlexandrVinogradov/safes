import { CartEmptySection } from './sections/CartEmptySection/CartEmptySection'
import { Main } from '../../Main/Main'
import { Layout } from '../../layout/layout'
import { ServerProductCardType } from '@/models/IProductStore'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { s } from './styles'
import { useBasketStore } from '@/store/useBasketStore'
import { CartSection } from './sections/CartSection/CartSection'

type PropsType = {
	products: ServerProductCardType[]
}

const СartPage = (props: PropsType) => {
	const { products } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Корзина', isActive: true },
	]

	const basketItems = useBasketStore((state) => state.basketItems)

	return (
		<Layout title="Корзина">
			<Main breadCrumbs={breadCrumbs}>
				{basketItems.length === 0 ? (
					<>
						<CartEmptySection />
						<ProductSliderSection className={s.productSliderSection} title="Вы недавно смотрели" products={products} />
					</>
				) : (
					<>
						<CartSection />
						<ProductSliderSection className={s.productSliderSection} title="Похожие товары" products={products} />
					</>
				)}
			</Main>
		</Layout>
	)
}
export default СartPage
