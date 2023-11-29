export type CategoryType = {
	name: string
	category_parent_id: number
	category_id: number
	lvl: number
	category_image: string
	'name_ru-RU': string
	'alias_ru-RU': string
	child: CategoryType[] | null
	ordering: number
	category_publish: boolean
}