export type SelectedProductType = ProductCardType & {
	product_date_added: string
	date_modify: string
	product_manufacturer_id: string
	'short_description_ru-RU': string
	'description_ru-RU': string
	'meta_title_ru-RU': string
	'meta_description_ru-RU': string
	'meta_keyword_ru-RU': string
	relatedSafes: ProductCardType[]
}

export type ProductImageType = { image_name: string }
export type ProductCardType = {
	image: string
	product_id: number
	'name_ru-RU': string
	product_old_price: number
	product_price: number
	product_ean: string
	'alias_ru-RU': string
	product_weight: string
	productImages: ProductImageType[]
	manufacturer: {
		'name_ru-RU': string
	}
	extra_field_3: string
	extra_field_4: string
	extra_field_8: string
	extra_field_9: string
	extra_field_20: string
	extra_field_22: string
	extra_field_13: string
	extra_field_15: string
	extra_field_17: string
}

export type ProductsType = {
	list: ProductCardType[]
	pagination: {
		currentPage: number
		totalPages: number
		totalRows: number
	}
}

export type FilterDataType = {
	price: {
		selectedDiapason: [number, number]
		fullDiapason: [number, number]
	}
	weight: {
		selectedDiapason: [number, number]
		fullDiapason: [number, number]
	}
}

export type ExtraValuesHandbook = {
	id: number
	field_id: number
	'name_ru-RU': string
}
