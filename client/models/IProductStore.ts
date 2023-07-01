export type ServerProductCardType = {
	product_id: number
	product_ean: string
	product_date_added: string
	date_modify: string
	product_old_price: string
	product_price: number
	product_weight: string
	image: string
	productImages: { image_name: string }[]
	product_manufacturer_id: string
	'name_ru-RU': string
	'alias_ru-RU': string
	'short_description_ru-RU': string
	'description_ru-RU': string
	'meta_title_ru-RU': string
	'meta_description_ru-RU': string
	'meta_keyword_ru-RU': string
	extra_field_3: string
	extra_field_4: string
	extra_field_8: string
	extra_field_9: string
	extra_field_20: string
	extra_field_22: string
	extra_field_13: string
	extra_field_15: string
	extra_field_17: string
	manufacturer: {
		manufacturer_id: number
		manufacturer_logo: string
		ordering: number
		'name_ru-RU': string
		'alias_ru-RU': string
		'short_description_ru-RU': string
		'description_ru-RU': string
		'meta_title_ru-RU': string
		'meta_description_ru-RU': string
		'meta_keyword_ru-RU': string
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
