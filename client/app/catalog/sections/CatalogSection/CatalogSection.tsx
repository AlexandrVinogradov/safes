'use client'
import { useEffect, useState } from 'react'
import { useProductStore } from '@/app/store/useProductStore'
import { container } from '@/app/styles/container'
import { SearchParamsType } from '@/app/types/SearchParamsType'
import { Filter } from '../../components/Filter/Filter'
import { CatalogProducts } from './CatalogProducts/CatalogProducts'
import { ServerProductCardType } from '@/app/models/IProductStore'
import { s } from './styles'
import clsx from 'clsx'
import { getApiProductURL } from '../../helpers/getApiProductURL'

type PropsType = {
	searchParams: SearchParamsType
	products: ServerProductCardType[] | null
}

export const CatalogSection = (props: PropsType) => {
	const { searchParams, products } = props

	const [isFirstRender, setIsFirstRender] = useState(true)
	const products2 = useProductStore((state) => state.products)
	const fetchProducts = useProductStore((state) => state.fetchProducts)

	useEffect(() => {
		setIsFirstRender(false)
	}, [])

	useEffect(() => {
		if (!isFirstRender) {
			fetchProducts(getApiProductURL(searchParams))
		}
	}, [searchParams])

	return (
		<section className={clsx(s.section, container)}>
			<div className={s.wrapper}>
				<Filter searchParams={searchParams} />

				<CatalogProducts products={products2 ? products2 : products} />
			</div>
		</section>
	)
}
