import { LogoIcon } from '@/app/icons/LogoIcon'
import Link from 'next/link'
import { Contacts } from '../../Contacts/Contacts'
import { Input } from '../../Input/Input'
import { s } from './styles'

export const HeaderUpElements = () => {
	return (
		<div className={s.mainWrapper}>
			<Link href="/">
				<LogoIcon />
			</Link>

			<div className={s.search}>
				<Input className={s.searchInput} placeholder="Введите текст поиска..." />
				<button className={s.searchButton}>Поиск</button>
			</div>

			<Contacts />
		</div>
	)
}
