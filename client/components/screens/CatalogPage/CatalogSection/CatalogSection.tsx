import { useEffect, useState } from 'react'
import { useProductStore } from '@/store/useProductStore'
import { container } from '@/styles/container'
import { Filter } from '../../../Filter/Filter'
import { CatalogProducts } from './CatalogProducts/CatalogProducts'
import { ServerProductCardType } from '@/models/IProductStore'
import { s } from './styles'
import clsx from 'clsx'
import { getApiProductURL } from '../../../../helpers/getApiProductURL'
import { useRouter } from 'next/router'

type PropsType = {
	products: ServerProductCardType[]
}

export const CatalogSection = (props: PropsType) => {
	const { products } = props
	const { query } = useRouter()

	const [isFirstRender, setIsFirstRender] = useState(true)
	const products2 = useProductStore((state) => state.products)
	const fetchProducts = useProductStore((state) => state.fetchProducts)

	useEffect(() => {
		setIsFirstRender(false)
	}, [])

	useEffect(() => {
		if (!isFirstRender) {
			fetchProducts(getApiProductURL(query))
		}
	}, [query])

	return (
		<section className={clsx(s.section, container)}>
			<div className={s.wrapper}>
				<Filter />

				<CatalogProducts products={products2.length ? products2 : products} />
			</div>
		</section>
	)
}
