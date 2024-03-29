import { HeaderUpElements } from './HeaderUpElements/HeaderUpElements'
import { HeaderLowElements } from './HeaderLowElements/HeaderLowElements'
import { s } from './styles'

export const LargeHeader = () => {
	return (
		<header id="large-header" className={s.headerWrapper}>
			<HeaderUpElements />
			<HeaderLowElements />
		</header>
	)
}
