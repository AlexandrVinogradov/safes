import { ProductImageType } from './IProductStore'

export type BasketItemType = {
	id: number
	image: string
	images: ProductImageType[]
	name: string
	price: number
	oldPrice: number
	count: number
	code: string
	isDeleted: boolean
}
