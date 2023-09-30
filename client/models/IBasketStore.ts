import { ProductImageType } from "./IProductStore"

export type BasketItemType = {
	id: number
	images: ProductImageType[]
	name: string
	price: number
	oldPrice: number
	count: number
	code: string
	isDeleted: boolean
}
