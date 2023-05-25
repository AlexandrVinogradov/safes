import Link from 'next/link'
import { s } from './styles'

export const CatalogRedirectMessage = () => {
	return (
		<p className={s.message}>
			Вы можете воспользоваться поиском или перейти в{' '}
			<Link className={s.link} href="/catalog">
				каталог
			</Link>
		</p>
	)
}
