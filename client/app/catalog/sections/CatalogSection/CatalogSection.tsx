import { useProductStore } from '@/app/store/useProductStore'
import { container } from '@/app/styles/container'
import { SearchParamsType } from '@/app/types/SearchParamsType'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Filter } from '../../components/Filter/Filter'
import { CatalogProducts } from './CatalogProducts/CatalogProducts'

type PropsType = {
	searchParams: SearchParamsType
}

export const CatalogSection = (props: PropsType) => {
	const { searchParams } = props
	const baseUrl = useProductStore((state) => state.baseUrl)

	const [url, setUrl] = useState('')
	useEffect(() => {
		// FIXME:
		const queryParameters = ['price', 'weight']
		let str = `${baseUrl}?`

		for (const key in searchParams) {
			const value = searchParams[key]

			if (queryParameters.includes(key) && value) {
				str = str + `${key}=${value}&`
			}
		}

		setUrl(str)
	}, [searchParams])

	return (
		// {/* // FIXME: */}
		<section className={clsx('pt-10', container)}>
			<div className="flex">
				<Filter searchParams={searchParams} />

				<CatalogProducts url={url} />
			</div>
		</section>
	)
}
