import { CategoryType } from '@/models/ICategoriesStore'
import { SearchParamsType } from '@/types/SearchParamsType'
import { getSelectCategory } from './getSelectCategory'

export const getApiProductURL = (searchParams: SearchParamsType | undefined, category?: CategoryType) => {
	// FIXME: extend {id?: string}
	const { id, ...params } = searchParams

	let selectedCategoryId = null
	if (category) selectedCategoryId = getSelectCategory(category, String(id))?.category_id

	const queryParameters = ['price', 'weight', 'page', 'pageSize']

	let url = `${process.env.API_URL_PRODUCTS}?`
	if (selectedCategoryId) {
		url = url + `categoryId=${selectedCategoryId}&`
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
