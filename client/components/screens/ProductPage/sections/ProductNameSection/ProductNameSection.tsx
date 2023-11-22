import { container } from '@/styles/container'
import { ProductGallery } from './ProductGallery/ProductGallery'
import { SelectedProductType } from '@/models/IProductStore'
import { CutButton } from '@/components/CutButton/CutButton'
import { AddToCartButton } from './AddToCartButton/AddToCartButton'
import { FastOrderButton } from './FastOrderButton/FastOrderButton'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	selectedProduct: SelectedProductType
}

export const ProductNameSection = (props: PropsType) => {
	const { selectedProduct } = props
	const { product_ean, productImages, product_price, product_old_price } = selectedProduct
	const name = selectedProduct['name_ru-RU']

	const imgItems = productImages?.map((img, id) => ({ id, src: img.image_name, alt: `Фото ${name}` }))

	return (
		<section className={clsx(s.section, container)}>
			<div className={s.wrapper}>
				<h1 className={s.mobileName}>{selectedProduct?.['name_ru-RU']}</h1>
				<ProductGallery
					items={imgItems}
					// videoLink='<iframe src="https://www.youtube.com/embed/xbEA9I1bW8Y" width="560" height="315" frameBorder="0" allowFullScreen={true}></iframe>'
				/>
				{/* TODO: manufacturer logo?  */}
				<div className={s.description}>
					<p className={s.code}>Код товара: {product_ean}</p>
					<h1 className={s.name}>{selectedProduct?.['name_ru-RU']}</h1>
					<div className={s.prices}>
						<p className={s.oldPrice}>{product_old_price.toLocaleString()} ₽</p>
						<p className={s.price}>{product_price.toLocaleString()} ₽</p>
					</div>

					<CutButton className={s.cheaper}>Нашли дешевле?</CutButton>

					<div className={s.orderButtons}>
						<AddToCartButton className={s.oderButton} selectedProduct={selectedProduct} />
						<FastOrderButton className={s.oderButton} selectedProduct={selectedProduct} />
					</div>
				</div>
			</div>
		</section>
	)
}
