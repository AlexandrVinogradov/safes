import Image from 'next/image'
import Link from 'next/link'
import { Contacts } from '../../Contacts/Contacts'
import { s } from './styles'

export const HeaderUpElements = () => {
	return (
		<div className={s.mainWrapper}>
			<Link href="/">
				<Image src="/logoIcon.svg" alt="Промметсейф Logo" width={318} height={77} priority />
			</Link>

			<div className={s.search}>
				<input className={s.searchInput} type="text" placeholder="Введите текст поиска..." />
				<button className={s.searchButton}>Поиск</button>
			</div>

			<Contacts />
		</div>
	)
}
