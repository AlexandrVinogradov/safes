import dynamic from 'next/dynamic'
import { CustomBadgePropsType } from '@/components/Badge/Badge'
import { BasketIcon } from '@/icons/BasketIcon'
import { s } from './styles'
import { useBasketStore } from '@/store/useBasketStore'

const DynamicCustomBadge = dynamic<CustomBadgePropsType>(() => import('@/components/Badge/Badge'), { ssr: false })

type PropsType = {
	className?: string
}

export const BasketButton = (props: PropsType) => {
	const { className } = props
	const basketItems = useBasketStore((state) => state.basketItems)

	const badgeCount = basketItems.reduce((acc, item) => {
		if (item.isDeleted) return acc
		return acc + item.count
	}, 0)

	return (
		<DynamicCustomBadge className={className} count={badgeCount} offset={[-7, -4]}>
			<BasketIcon className={s.basketIcon} />
		</DynamicCustomBadge>
	)
}
