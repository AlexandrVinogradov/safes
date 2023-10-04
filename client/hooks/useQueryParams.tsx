import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export const useQueryParams = () => {
	const router = useRouter()
	const [queryParams, setQueryParams] = useState({})

	const updateQueryParams = useCallback(
		(params: { [key: string]: string }, scroll?: { scroll: boolean }) => {
			const searchParams = new URLSearchParams({
				...queryParams,
				...params,
			}).toString()

			const url = router.asPath.split('?')[0] // Убираем текущие параметры запроса из URL
			const hasParams = router.asPath.includes('?')
			const newUrl = hasParams ? `${url}?${searchParams}` : `${url}${searchParams ? `?${searchParams}` : ''}`

			router.replace(newUrl, undefined, { scroll: !!scroll })
		},
		[queryParams, router],
	)

	const removeQueryParams = useCallback(
		(paramsForRemove: string[], scroll?: { scroll: boolean }) => {
			const searchParams = new URLSearchParams(queryParams)

			paramsForRemove.forEach((param) => {
				searchParams.delete(param)
			})

			const url = router.asPath.split('?')[0] // Убираем текущие параметры запроса из URL
			const hasParams = router.asPath.includes('?')
			const newUrl = hasParams ? `${url}?${searchParams.toString()}` : url

			router.replace(newUrl, undefined, { scroll: !!scroll })
		},
		[queryParams, router],
	)

	const resetQueryParams = useCallback(
		(scroll?: { scroll: boolean }) => {
			const url = router.asPath.split('?')[0]
			router.replace(url, undefined, { scroll: !!scroll })
		},
		[router],
	)

	useEffect(() => {
		const searchParams = new URLSearchParams(router.asPath.split('?')[1] || '')
		const newQueryParams = Object.fromEntries(searchParams.entries())
		setQueryParams(newQueryParams)
	}, [router.asPath])

	return { queryParams, setQueryParams: updateQueryParams, resetQueryParams, removeQueryParams }
}
