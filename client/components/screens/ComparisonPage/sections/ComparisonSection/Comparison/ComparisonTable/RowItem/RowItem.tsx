import { usePersistStore } from '@/hooks/usePersistStore'
import { useComparisonStore } from '@/store/useComparisonStore'
import { s } from './styles'

type PropsType = {
	title: string
	valueType: 'product_price' | 'manufacturer' | 'product_weight' | 'extra_field_9' | 'extra_field_15' | 'extra_field_3'
}

export const RowItem = (props: PropsType) => {
	const { title, valueType } = props

	const comparisonStore = usePersistStore(useComparisonStore, (state) => state)
	const comparisonItems = comparisonStore?.comparisonItems

	return (
		<div className={s.row}>
			<p className={s.title}>{title}</p>
			{comparisonItems?.map((el) => (
				<div className={s.cell}>{valueType !== 'product_price' ? el[valueType] : el[valueType].toLocaleString('ru-RU')}</div>
			))}
		</div>
	)
}
