import { useQueryParams } from '@/hooks/useQueryParams'
import Pagination from 'antd/es/pagination'
import type { PaginationProps } from 'antd'
import { useRouter } from 'next/router'

export type PaginationPropsType = {
	className?: string
	total: number
}

const CustomPagination = (props: PaginationPropsType) => {
	const { className, total } = props
	const { setQueryParams } = useQueryParams()
	const { query } = useRouter()

	const queryPage = Number(query.page) || 1
	const queryPageSize = Number(query.pageSize) || 12

	const onChange: PaginationProps['onChange'] = (page, pageSize) => {
		const isNewPage = queryPage !== page
		const isNewPageSize = queryPageSize !== pageSize

		if (isNewPage) setQueryParams({ page: String(page) }, { scroll: true })

		if (isNewPageSize) {
			setQueryParams({ page: '1', pageSize: String(pageSize) })
		}
	}

	return (
		<Pagination
			className={className}
			current={queryPage}
			onChange={onChange}
			total={total}
			pageSize={queryPageSize}
			pageSizeOptions={[12, 24, 36]}
		/>
	)
}

export default CustomPagination
