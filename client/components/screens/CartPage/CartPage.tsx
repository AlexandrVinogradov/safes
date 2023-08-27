import { CartEmptySection } from './sections/CartEmptySection/CartEmptySection'
import { Main } from '../../Main/Main'
import { Layout } from '../../layout/layout'
import { ServerProductCardType } from '@/models/IProductStore'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { useBasketStore } from '@/store/useBasketStore'
import { CartSection } from './sections/CartSection/CartSection'
import { usePersistStore } from '@/hooks/usePersistStore'
import { useEffect } from 'react'

type PropsType = {
	productsList: ServerProductCardType[]
}

// TODO:
// - reduce в helpers

const СartPage = (props: PropsType) => {
	const { productsList } = props

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Корзина', isActive: true },
	]

	const fullDeleteItems = useBasketStore((state) => state.fullDeleteItems)
	const basketStore = usePersistStore(useBasketStore, (state) => state)
	const basketItems = basketStore?.basketItems

	useEffect(() => {
		return () => {
			if (basketItems?.some((item) => item.isDeleted)) fullDeleteItems()
		}
	}, [])

	return (
		<Layout title="Корзина">
			<Main breadCrumbs={breadCrumbs}>
				{basketItems?.length === 0 ? (
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
