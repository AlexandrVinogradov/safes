import { CategoryType } from '@/models/ICategoriesStore'
import { SearchParamsType } from '@/types/SearchParamsType'
import { getSelectCategory } from './getSelectCategory'

export const getApiProductURL = (searchParams: SearchParamsType | undefined, category?: CategoryType, search?: string) => {
	// FIXME: extend {id?: string}
	const { id, ...params } = searchParams

	let selectedCategoryId = null
	if (category) selectedCategoryId = getSelectCategory(category, String(id))?.category_id

	const queryParameters = [
		// filter
		'price',
		'weight',
		'burglaryResistance',
		'fireResistance',
		'keyType',
		'gunCount',
		'metalThickness',
		// pagination
		'page',
		'pageSize',
		// sort
		'sort',
		// search
		'search',
	]

	let url = `${process.env.API_URL_PRODUCTS}?isPublish=1&`
	if (selectedCategoryId) {
		url = url + `categoryId=${selectedCategoryId}&`
	}
	if (search) {
		url = url + `search=${search}&`
	}

	if (!searchParams) return url
	for (const key in searchParams) {
		const value = searchParams[key]

		if (queryParameters.includes(key) && value) {
			url = url + `${key}=${value}&`
		}
	}

	return url
}
