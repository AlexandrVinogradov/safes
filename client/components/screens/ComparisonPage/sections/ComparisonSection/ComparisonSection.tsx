import { container } from '@/styles/container'
import { usePersistStore } from '@/hooks/usePersistStore'
import { useComparisonStore } from '@/store/useComparisonStore'
import { Comparison } from './Comparison/Comparison'
import clsx from 'clsx'
import { s } from './styles'

import { EmptyComparison } from './EmptyComparison/EmptyComparison'

export const ComparisonSection = () => {
	const comparisonStore = usePersistStore(useComparisonStore, (state) => state)
	const comparisonItems = comparisonStore?.comparisonItems

	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>Сравнение товаров</h1>

			{comparisonItems?.length ? <Comparison /> : <EmptyComparison />}
		</section>
	)
}
