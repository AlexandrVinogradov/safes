import { HeaderLowElements } from './HeaderLowElements/HeaderLowElements'
import { HeaderUpElements } from './HeaderUpElements/HeaderUpElements'
import { s } from './styles'

export const Header = () => {
	return (
		<header className={s.headerWrapper}>
			<HeaderUpElements />
			<HeaderLowElements />
		</header>
	)
}
