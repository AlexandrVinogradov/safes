import { useComparisonStore } from '@/store/useComparisonStore'
import { ComparisonIcon } from '@/icons/CompareIcon'
import { CustomBadgePropsType } from '@/components/Badge/Badge'
import dynamic from 'next/dynamic'
import { s } from './styles'
import Link from 'next/link'

const DynamicCustomBadge = dynamic<CustomBadgePropsType>(() => import('@/components/Badge/Badge'), { ssr: false })

export const ComparisonButton = () => {
	const comparisonItems = useComparisonStore((state) => state.comparisonItems)

	return (
		<DynamicCustomBadge count={comparisonItems.length} offset={[-4, -4]}>
			<Link href="/comparison">
				<ComparisonIcon width="w-[31px]" className={s.basketIcon} />
			</Link>
		</DynamicCustomBadge>
	)
}
