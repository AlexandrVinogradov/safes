import { IconButton } from '@/components/IconButton/IconButton'
import { ProductCardType } from '@/models/IProductStore'
import { useBasketStore } from '@/store/useBasketStore'
import { BasketIcon } from '@/icons/BasketIcon'
import { s } from './styles'
import clsx from 'clsx'

export type BasketButtonPropsType = {
	card: ProductCardType
}

const BasketButton = (props: BasketButtonPropsType) => {
	const { card } = props

	const addBasketItem = useBasketStore((state) => state.addBasketItem)
	const deleteSelectedItem = useBasketStore((state) => state.deleteSelectedItem)
	const basketItems = useBasketStore((state) => state.basketItems)

	const hasItemInBasket = basketItems?.some((el) => el.id === card.product_id)

	const handleClickAddProduct = () => {
		!hasItemInBasket
			? addBasketItem({
					id: card.product_id,
					image: card.image,
					images: card.productImages,
					name: card['name_ru-RU'],
					price: card.product_price,
					oldPrice: card.product_old_price,
					code: card.product_ean,
					isDeleted: false,
			  })
			: deleteSelectedItem(card.product_id)
	}

	return (
		<IconButton
			onClick={handleClickAddProduct}
			className={clsx(s.iconButton, hasItemInBasket && s.selected)}
			icon={<BasketIcon className={s.cartIcon} />}
		/>
	)
}

export default BasketButton
