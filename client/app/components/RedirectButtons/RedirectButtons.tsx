import { Button } from '../Button/Button'
import { s } from './styles'

export const RedirectButtons = () => {
	return (
		<div className={s.buttons}>
			<Button className={s.button} href="/">
				На главную
			</Button>
			<Button className={s.button} href="/catalog">
				В каталог
			</Button>
		</div>
	)
}
