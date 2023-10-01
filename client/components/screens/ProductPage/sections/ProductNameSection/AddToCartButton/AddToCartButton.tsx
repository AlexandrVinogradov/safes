import { Button } from '@/components/Button/Button'
import { ClickInput } from '@/components/ClickInput/ClickInput'
import { SelectedProductType } from '@/models/IProductStore'
import { useBasketStore } from '@/store/useBasketStore'
import { s } from './styles'

type PropsType = {
	selectedProduct: SelectedProductType
}

export const AddToCartButton = (props: PropsType) => {
	const { selectedProduct } = props
	const { product_id, image, productImages, product_price, product_old_price, product_ean } = selectedProduct
	const name = selectedProduct['name_ru-RU']

	const basketItems = useBasketStore((state) => state.basketItems)
	const addBasketItem = useBasketStore((state) => state.addBasketItem)
	const changeItemCount = useBasketStore((state) => state.changeItemCount)
	const count = basketItems.find((product) => product.id === selectedProduct.product_id)?.count || 0

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
	}

	const handleChangeClickInput = (operation: 'increase' | 'decrease') => {
		changeItemCount(selectedProduct.product_id, operation, true)
	}

	return (
		<div className={s.oderButton}>
			<Button className={s.button} onClick={handleClickAddProduct} styleType="filled">
				В корзину
			</Button>

			{count > 0 && <ClickInput value={count} onChange={handleChangeClickInput} />}
		</div>
	)
}
