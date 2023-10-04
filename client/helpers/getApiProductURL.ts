import { CategoryType } from '@/models/ICategoriesStore'
import { SearchParamsType } from '@/types/SearchParamsType'
import { getSelectCategory } from './getSelectCategory'
import { getClientServerUrl } from './getClientServerUrl'

export const getApiProductURL = (
	searchParams: SearchParamsType | undefined,
	category?: CategoryType,
	search?: string,
	manufacturerId?: string,
) => {
	// FIXME: extend {id?: string}
	// @ts-ignore
	const { id, ...params } = searchParams

	let selectedCategoryId = null
	if (category) selectedCategoryId = getSelectCategory(category, String(id))?.category_id

	const queryParameters = [
		// filter
		'price',
		'weight',
		'manufacturer',
		'burglaryResistance',
		'fireResistance',
		'keyType',
		'gunCount',
		'metalThickness',
		'height',
		'width',
		'depth',
		// pagination
		'page',
		'pageSize',
		// sort
		'sort',
		// search
		'search',
	]

	let url = `${getClientServerUrl('products')}?isPublish=1&`
	if (selectedCategoryId) {
		url = url + `categoryId=${selectedCategoryId}&`
	}
	if (search) {
		url = url + `search=${search}&`
	}
	if (manufacturerId) {
		url = url + `manufacturerId=${manufacturerId}&`
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