import s from './ComparisonTable.module.scss'
import { RowItem } from './RowItem/RowItem'

export const ComparisonTable = () => {
	return (
		<div className={s.ComparisonTable}>
			<RowItem title="ЦЕНА, ₽" valueType="product_price" />
			<RowItem title="Производитель" valueType="manufacturer" />
			<RowItem title="Вес" valueType="product_weight" />
			<RowItem title="Вид замка" valueType="extra_field_9" />
			<RowItem title="Габариты (мм)" valueType="extra_field_15" />
			<RowItem title="Взломостойкость" valueType="extra_field_3" />
		</div>
	)
}
