import { CartEmptySection } from './sections/CartEmptySection/CartEmptySection'
import { Main } from '../../Main/Main'
import { Layout } from '../../layout/layout'
import { ServerProductCardType } from '@/models/IProductStore'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { useBasketStore } from '@/store/useBasketStore'
import { CartSection } from './sections/CartSection/CartSection'

type PropsType = {
	productsList: ServerProductCardType[]
}

// TODO:
// - reduce в helpers
// - max-h basket popover
// - basket in storage
// - basket store types
// - isDeleted - remove from popover

const СartPage = (props: PropsType) => {
	const { productsList } = props

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
						<ProductSliderSection title="Вы недавно смотрели" productsList={productsList} />
					</>
				) : (
					<>
						<CartSection />
						<ProductSliderSection title="Похожие товары" productsList={productsList} />
					</>
				)}
			</Main>
		</Layout>
	)
}
export default СartPage
