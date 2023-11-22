import { Button } from '@/components/Button/Button'
import { SelectedProductType } from '@/models/IProductStore'
import { useBasketStore } from '@/store/useBasketStore'
import { useRouter } from 'next/router'

type PropsType = {
	selectedProduct: SelectedProductType
	className?: string
}

export const FastOrderButton = (props: PropsType) => {
	const { selectedProduct, className } = props
	const { product_id, image, productImages, product_price, product_old_price, product_ean } = selectedProduct
	const name = selectedProduct['name_ru-RU']
	const router = useRouter()

	const addBasketItem = useBasketStore((state) => state.addBasketItem)

	const handleClickAddProduct = () => {
		addBasketItem({
			id: product_id,
			image,
			images: productImages,
			name: name,
			price: product_price,
			oldPrice: product_old_price,
			code: product_ean,
			isDeleted: false,
		})

		router.push('/cart')
	}

	return (
		<Button onClick={handleClickAddProduct} className={className}>
			Быстрый заказ
		</Button>
	)
}
