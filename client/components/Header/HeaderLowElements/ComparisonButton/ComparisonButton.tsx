import dynamic from 'next/dynamic'
import { CustomBadgePropsType } from '@/components/Badge/Badge'
import { s } from './styles'
import { ComparisonIcon } from '@/icons/CompareIcon'
import Link from 'next/link'
import { useComparisonStore } from '@/store/useComparisonStore'

const DynamicCustomBadge = dynamic<CustomBadgePropsType>(() => import('@/components/Badge/Badge'), { ssr: false })

export const ComparisonButton = () => {
	const comparisonItems = useComparisonStore((state) => state.comparisonItems)

	return (
		<DynamicCustomBadge count={comparisonItems.length} offset={[-25, -4]}>
			<Link href="/comparison">
				<ComparisonIcon width="w-[31px]" className={s.basketIcon} />
			</Link>
		</DynamicCustomBadge>
	)
}
