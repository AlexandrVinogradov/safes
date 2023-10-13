import { useComparisonStore } from '@/store/useComparisonStore'
import { ComparisonIcon } from '@/icons/CompareIcon'
import { IconButton } from '@/components/IconButton/IconButton'
import { ProductCardType } from '@/models/IProductStore'
import { s } from './styles'
import clsx from 'clsx'

export type CompareButtonPropsType = {
	card: ProductCardType
	iconStyles?: string
}

const ComparisonButton = (props: CompareButtonPropsType) => {
	const { card, iconStyles } = props

	const addComparisonItem = useComparisonStore((state) => state.addComparisonItem)
	const deleteItem = useComparisonStore((state) => state.deleteItem)
	const comparisonItems = useComparisonStore((state) => state.comparisonItems)

	const hasItem = comparisonItems?.some((el) => el.product_id === card.product_id)

	const handleClickCompareProduct = () => {
		if (!hasItem) {
			addComparisonItem({
				...card,
				manufacturer: card.manufacturer['name_ru-RU'],
			})
		} else {
			deleteItem(card.product_id)
		}
	}

	return (
		<IconButton
			onClick={handleClickCompareProduct}
			className={clsx(s.iconButton, hasItem && s.selected)}
			icon={<ComparisonIcon className={iconStyles} />}
		/>
	)
}

export default ComparisonButton
