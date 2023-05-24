'use client'
import { RequestCallModal } from '@/app/Modals/RequestCallModal/RequestCallModal'
import { HeaderLowElements } from './HeaderLowElements/HeaderLowElements'
import { HeaderUpElements } from './HeaderUpElements/HeaderUpElements'
import { s } from './styles'

export const Header = () => {
	return (
		<header className={s.headerWrapper}>
			<RequestCallModal />
			<HeaderUpElements />
			<HeaderLowElements />
		</header>
	)
}
