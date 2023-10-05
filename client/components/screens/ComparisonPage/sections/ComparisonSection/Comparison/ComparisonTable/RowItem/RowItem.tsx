import { usePersistStore } from '@/hooks/usePersistStore'
import { useComparisonStore } from '@/store/useComparisonStore'
import { s } from './styles'

type PropsType = {
	title: string
	valueType:
		| 'product_price'
		| 'manufacturer'
		| 'product_weight'
		| 'extra_field_9'
		| 'extra_field_15'
		| 'extra_field_3'
		| 'extra_field_4'
		| 'extra_field_8'
		| 'extra_field_20'
}

export const RowItem = (props: PropsType) => {
	const { title, valueType } = props

	const comparisonStore = usePersistStore(useComparisonStore, (state) => state)
	const comparisonItems = comparisonStore?.comparisonItems

	const getValue = (value: string | number | null) => {
		if (value) return value
		if (value && valueType === 'product_price') return value.toLocaleString('ru-RU')
		return '—'
	}

	return (
		<div className={s.row}>
			<p className={s.title}>{title}</p>
			{comparisonItems?.map((el) => (
				<div key={el.product_id} className={s.cell}>
					{getValue(el[valueType])}
				</div>
			))}
		</div>
	)
}
