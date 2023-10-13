import { useEffect, useRef } from 'react'
import { useProductStore } from '@/store/useProductStore'
import { container } from '@/styles/container'
import { Filter } from '../../../../Filter/Filter'
import { ExtraValuesHandbook, ProductsType } from '@/models/IProductStore'
import { getApiProductURL } from '../../../../../helpers/getApiProductURL'
import { useRouter } from 'next/router'
import { CategoryType } from '@/models/ICategoriesStore'
import { ParsedUrlQuery } from 'querystring'
import { PaginationPropsType } from '@/components/Pagination/Pagination'
import Sort from '@/components/Sort/Sort'
import dynamic from 'next/dynamic'
import { s } from './styles'
import clsx from 'clsx'
import { ProductsGrid } from '@/components/ProductsGrid/ProductsGrid'
import { SimplManufactureType } from '@/models/IManufacturersStore'
import { FilterButton } from './FilterButton/FilterButton'

const DynamicCustomPagination = dynamic<PaginationPropsType>(() => import('@/components/Pagination/Pagination'), { ssr: false })

type PropsType = {
	products: ProductsType
	category?: CategoryType
	extraValuesHandbook: ExtraValuesHandbook[]
	simpleManufacturers: SimplManufactureType[] | null
}

export const CatalogSection = (props: PropsType) => {
	const { products, category, extraValuesHandbook, simpleManufacturers } = props
	const { query } = useRouter()

	const fetchProducts = useProductStore((state) => state.fetchProducts)

	const prevQueryRef = useRef<ParsedUrlQuery>(query)
	useEffect(() => {
		if (prevQueryRef.current !== query) {
			console.log('fetch =>')

			fetchProducts(getApiProductURL(query, category))
			prevQueryRef.current = query
		}
	}, [query])

	const sortData = [
		{ name: 'По порядку', value: 'product_id' },
		{ name: 'По цене', value: 'product_price' },
		{ name: 'По названию', value: 'name_ru-RU' },
	]

	return (
		<section className={clsx(s.section, container)}>
			<div className={s.filterSort}>
				<FilterButton className={s.filterButton} />
				<Sort className={s.sort} data={sortData} />
			</div>
			<div className={s.wrapper}>
				<Filter extraValuesHandbook={extraValuesHandbook} simpleManufacturers={simpleManufacturers} />

				<div className={s.productsWithPagination}>
					<ProductsGrid products={products.list} />
					<DynamicCustomPagination className={s.pagination} total={products.pagination.totalRows} />
				</div>
			</div>
		</section>
	)
}
