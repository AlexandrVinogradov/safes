import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'

export const useQueryParams = () => {
	const router = useRouter()
	const [queryParams, setQueryParams] = useState({})

	const updateQueryParams = useCallback(
		(params: { [key: string]: string }) => {
			const searchParams = new URLSearchParams({
				...queryParams,
				...params,
			}).toString()

			const url = router.asPath.split('?')[0] // Убираем текущие параметры запроса из URL
			const hasParams = router.asPath.includes('?')
			const newUrl = hasParams ? `${url}?${searchParams}` : `${url}${searchParams ? `?${searchParams}` : ''}`

			router.replace(newUrl)
		},
		[queryParams, router],
	)

	const resetQueryParams = useCallback(() => {
		const url = router.asPath.split('?')[0]
		router.replace(url)
	}, [router])

	// FIXME: delete comment
	//   const queryParamEntries = useMemo(() => Object.entries(queryParams), [queryParams]);
	useEffect(() => {
		const searchParams = new URLSearchParams(router.asPath.split('?')[1] || '')
		const newQueryParams = Object.fromEntries(searchParams.entries())
		setQueryParams(newQueryParams)
	}, [router.asPath])

	return { queryParams, setQueryParams: updateQueryParams, resetQueryParams }
}
