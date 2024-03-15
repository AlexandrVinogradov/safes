import Image from 'next/image'
import { IconButton } from '@/components/IconButton/IconButton'
import { CrossIcon } from '@/icons/CrossIcon'
import { usePersistStore } from '@/hooks/usePersistStore'
import { useComparisonStore } from '@/store/useComparisonStore'
import { ComparisonTable } from './ComparisonTable/ComparisonTable'
import { s } from './styles'
import { apiUrl } from '@/constants/apiUrl'
import { replaceImageExtensions } from '@/helpers/replaceImageExtensions'

export const Comparison = () => {
	const comparisonStore = usePersistStore(useComparisonStore, (state) => state)
	const comparisonItems = comparisonStore?.comparisonItems

	const deleteItem = useComparisonStore((state) => state.deleteItem)
	const clearItems = useComparisonStore((state) => state.clearItems)

	const handleClickDeleteAllItems = () => clearItems()
	const handleClickDeleteItem = (id: number) => deleteItem(id)

	return (
		<>
			<button onClick={handleClickDeleteAllItems} className={s.deleteAllButton}>
				<CrossIcon width={s.crossIcon} />
				Удалить список
			</button>
			<div className="overflow-x-auto">
				<ul className={s.list}>
					{comparisonItems?.map((el) => (
						<li key={el.product_id} className={s.listItem}>
							<IconButton
								onClick={() => handleClickDeleteItem(el.product_id)}
								className={s.removeItemButton}
								icon={<CrossIcon />}
							/>

							<div className={s.imgWrapper}>
								<Image
									unoptimized={true}
									src={`${apiUrl}/img_products/${replaceImageExtensions(el.image)}`}
									alt={el['name_ru-RU']}
									width="0"
									height="0"
									className={s.image}
								/>
							</div>
							<span className={s.itemName}>{el['name_ru-RU']}</span>
						</li>
					))}
				</ul>

				<ComparisonTable />
			</div>
		</>
	)
}
