import { LogoIcon } from '@/icons/LogoIcon'
import Link from 'next/link'
import { Contacts } from '../../../Contacts/Contacts'
import { s } from './styles'
import { Search } from '../../HeaderComponents/Search/Search'

export const HeaderUpElements = () => {
	return (
		<div className={s.mainWrapper}>
			<Link href="/">
				<LogoIcon className={s.logo} />
			</Link>

			<Search className={s.search} />

			<Contacts className={s.contacts} />
		</div>
	)
}
