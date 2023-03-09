import Image from 'next/image'
import { Contacts } from '../../Contacts/Contacts'
import { s } from './styles'

export const HeaderUpElements = () => {
	return (
		<div className={s.mainWrapper}>
			<Image src="/logoIcon.svg" alt="Промметсейф Logo" width={318} height={77} priority />

			<div className={s.search}>
				<input className={s.searchInput} type="text" placeholder="Введите текст поиска..." />
				<button className={s.searchButton}>Поиск</button>
			</div>

			<Contacts />
		</div>
	)
}
