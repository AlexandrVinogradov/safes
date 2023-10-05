import s from './ComparisonTable.module.scss'
import { RowItem } from './RowItem/RowItem'

export const ComparisonTable = () => {
	return (
		<div className={s.ComparisonTable}>
			<RowItem title="ЦЕНА, ₽" valueType="product_price" />
			<RowItem title="Производитель" valueType="manufacturer" />
			<RowItem title="Габариты (мм)" valueType="extra_field_15" />
			<RowItem title="Вес" valueType="product_weight" />
			<RowItem title="Толщена металла" valueType="extra_field_20" />
			<RowItem title="Взломостойкость" valueType="extra_field_3" />
			<RowItem title="Огнестойкость" valueType="extra_field_4" />
			<RowItem title="Количество стволов" valueType="extra_field_8" />
			<RowItem title="Вид замка" valueType="extra_field_9" />
		</div>
	)
}
