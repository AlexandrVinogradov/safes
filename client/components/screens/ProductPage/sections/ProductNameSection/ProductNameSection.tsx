import { container } from '@/styles/container'
import { Button } from '@/components/Button/Button'
import { ProductGallery } from './ProductGallery/ProductGallery'
import { useBasketStore } from '@/store/useBasketStore'
import { SelectedProductType } from '@/models/IProductStore'
import { CutButton } from '@/components/CutButton/CutButton'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	selectedProduct: SelectedProductType
}

export const ProductNameSection = (props: PropsType) => {
	const { selectedProduct } = props
	const { product_id, product_ean, productImages, product_price, product_old_price } = selectedProduct
	const name = selectedProduct['name_ru-RU']
	const addBasketItem = useBasketStore((state) => state.addBasketItem)

	const imgItems = productImages?.map((img, id) => ({ id, src: img.image_name, alt: `Фото ${name}` }))

	const handleClickAddProduct = () => {
		addBasketItem({
			id: product_id,
			images: productImages,
			name: name,
			price: product_price,
			oldPrice: product_old_price,
			code: product_ean,
			isDeleted: false,
		})
	}

	return (
		<section className={clsx(s.section, container)}>
			<div className={s.wrapper}>
				<ProductGallery items={imgItems} />

				<div className="w-full ml-5">
					<p className={s.code}>Код товара: {product_ean}</p>
					<h1 className={s.name}>{selectedProduct?.['name_ru-RU']}</h1>
					<div className={s.prices}>
						{/* FIXME: .toLocaleString() */}
						<p className={s.oldPrice}>{product_old_price} ₽</p>
						<p className={s.price}>{product_price} ₽</p>
					</div>

					<CutButton className={s.cheaper}>Нашли дешевле?</CutButton>

					<div className={s.orderButtons}>
						<Button onClick={handleClickAddProduct} styleType="filled" className={s.oderButton}>
							В корзину
						</Button>
						<Button className={s.oderButton}>Быстрый заказ</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
