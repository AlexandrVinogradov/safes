import { useComparisonStore } from '@/store/useComparisonStore'
import { ComparisonIcon } from '@/icons/CompareIcon'
import { IconButton } from '@/components/IconButton/IconButton'
import { ServerProductCardType } from '@/models/IProductStore'
import { s } from './styles'
import clsx from 'clsx'

export type CompareButtonPropsType = {
	card: ServerProductCardType
}

const ComparisonButton = (props: CompareButtonPropsType) => {
	const { card } = props

	const addComparisonItem = useComparisonStore((state) => state.addComparisonItem)
	const deleteItem = useComparisonStore((state) => state.deleteItem)
	const comparisonItems = useComparisonStore((state) => state.comparisonItems)

	const hasItem = comparisonItems?.some((el) => el.product_id === card.product_id)

	const handleClickCompareProduct = () => {
		const { manufacturer, ...otherProperties } = card
		if (!hasItem) {
			addComparisonItem({
				...otherProperties,
				manufacturer: manufacturer['name_ru-RU'],
			})
		} else {
			deleteItem(card.product_id)
		}
	}

	return (
		<IconButton onClick={handleClickCompareProduct} className={clsx(s.iconButton, hasItem && s.selected)} icon={<ComparisonIcon />} />
	)
}

export default ComparisonButton
