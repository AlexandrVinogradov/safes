import { RedirectSection } from '@/components/screens/AboutCompanyPage/sections/RedirectSection/RedirectSection'
import Link from 'next/link'
import { ComparisonIcon } from '@/icons/CompareIcon'
import { s } from './styles'

export const EmptyComparison = () => {
	return (
		<>
			<p className={s.message}>
				В сравнении пока нет товаров, перейдите в
				<Link className={s.link} href="/catalog">
					каталог
				</Link>
				и добавьте интересующие вас товары в сравнение, нажав на кнопку: <ComparisonIcon className={s.comparisonIcon} />
			</p>
			<RedirectSection />
		</>
	)
}
