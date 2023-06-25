import { useEffect, useMemo, useState } from 'react'
import { useProductStore } from '@/store/useProductStore'
import { container } from '@/styles/container'
import { Filter } from '../../../../Filter/Filter'
import { CatalogProducts } from './CatalogProducts/CatalogProducts'
import { ServerProductCardType } from '@/models/IProductStore'
import { s } from './styles'
import clsx from 'clsx'
import { getApiProductURL } from '../../../../../helpers/getApiProductURL'
import { useRouter } from 'next/router'
import { CategoryType } from '@/models/ICategoriesStore'

type PropsType = {
	products: ServerProductCardType[]
	category?: CategoryType
}

export const CatalogSection = (props: PropsType) => {
	const { products, category } = props
	const { query } = useRouter()

	const [isFirstRender, setIsFirstRender] = useState(true)
	const filterData = useProductStore((state) => state.filterData)
	const clientProducts = useProductStore((state) => state.products)
	const fetchProducts = useProductStore((state) => state.fetchProducts)

	useEffect(() => {
		setIsFirstRender(false)
	}, [])

	// console.log(query)
	// useEffect(() => {
	// 	if (!isFirstRender) {
	// 		// console.log(getApiProductURL(query))

	// 		fetchProducts(getApiProductURL(query))
	// 	}
	// }, [query])

	const memoizedFilterData = useMemo(() => filterData, [filterData])
	useEffect(() => {
		console.log(filterData)

		if (!isFirstRender) {
			// TODO: call 2 times why?
			console.log('change filter data')
			fetchProducts(getApiProductURL(query, category))
		}
		// }, [JSON.stringify(filterData)])
	}, [filterData.price.selectedDiapason])
	// }, [memoizedFilterData])

	return (
		<section className={clsx(s.section, container)}>
			<div className={s.wrapper}>
				<Filter category={category} />

				{/* FIXME: cant use .length cos if back return [] - will not rerender */}
				<CatalogProducts products={clientProducts.length ? clientProducts : products} />
			</div>
		</section>
	)
}
