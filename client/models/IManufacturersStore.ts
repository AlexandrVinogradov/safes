export type ManufacturerType = {
	country: string
	flag: string
	manufacturers: SelectedManufacturer[]
}

export type SelectedManufacturer = {
	'name_ru-RU': string
	manufacturer_id: number
	manufacturer_logo: string
	ordering: number
	'alias_ru-RU': string
	'short_description_ru-RU': string
	'description_ru-RU': string
	'meta_title_ru-RU': string
	'meta_description_ru-RU': string
	'meta_keyword_ru-RU': string
	country_id: number
}
