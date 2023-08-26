import { useEffect, useRef } from 'react'
import { useProductStore } from '@/store/useProductStore'
import { container } from '@/styles/container'
import { ProductsGrid } from '../../../../ProductsGrid/ProductsGrid'
import { ProductsType } from '@/models/IProductStore'
import { getApiProductURL } from '../../../../../helpers/getApiProductURL'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { PaginationPropsType } from '@/components/Pagination/Pagination'
import Sort from '@/components/Sort/Sort'
import dynamic from 'next/dynamic'
import { s } from './styles'
import clsx from 'clsx'

const DynamicCustomPagination = dynamic<PaginationPropsType>(() => import('@/components/Pagination/Pagination'), { ssr: false })

type PropsType = {
	products: ProductsType
}

export const SearchResultSection = (props: PropsType) => {
	const { products } = props
	const { query } = useRouter()

	const fetchProducts = useProductStore((state) => state.fetchProducts)

	const prevQueryRef = useRef<ParsedUrlQuery>(query)
	useEffect(() => {
		if (prevQueryRef.current !== query) {
			console.log('fetch =>')

			fetchProducts(getApiProductURL(query))
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
			<Sort className={s.sort} data={sortData} />
			<div className={s.wrapper}>
				<div className={s.productsWithPagination}>
					<ProductsGrid products={products.list} className={s.productGrid} />
					<DynamicCustomPagination className={s.pagination} total={products.pagination.totalRows} />
				</div>
			</div>
		</section>
	)
}
