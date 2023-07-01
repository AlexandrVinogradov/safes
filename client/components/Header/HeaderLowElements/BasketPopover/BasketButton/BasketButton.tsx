import dynamic from 'next/dynamic'
import { CustomBadgePropsType } from '@/components/Badge/Badge'
import { BasketIcon } from '@/icons/BasketIcon'
import { s } from './styles'
import { useBasketStore } from '@/store/useBasketStore'

const DynamicCustomBadge = dynamic<CustomBadgePropsType>(() => import('@/components/Badge/Badge'), { ssr: false })

export const BasketButton = () => {
	const basketItems = useBasketStore((state) => state.basketItems)

	const badgeCount = basketItems.reduce((acc, item) => acc + item.count, 0)

	return (
		<DynamicCustomBadge count={badgeCount} offset={[-7, -4]}>
			<BasketIcon className={s.basketIcon} />
		</DynamicCustomBadge>
	)
}
