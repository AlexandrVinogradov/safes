import { SearchParamsType } from '@/types/SearchParamsType'

export const getApiProductURL = (searchParams: SearchParamsType) => {
	const queryParameters = ['price', 'weight']
	let url = `${process.env.API_URL_PRODUCTS}?`

	for (const key in searchParams) {
		const value = searchParams[key]

		if (queryParameters.includes(key) && value) {
			url = url + `${key}=${value}&`
		}
	}

	return url
}
