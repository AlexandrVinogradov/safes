import { MouseEventHandler, ReactNode } from 'react'
import { OverlayingModal } from './OverlayingModal'
import { s } from './styles'

type PropsTypes = {
	isOpen: boolean
	onClose: MouseEventHandler<HTMLDivElement>
	children: ReactNode
}

export const MainModal = (props: PropsTypes) => {
	const { isOpen, onClose, children } = props

	return (
		<OverlayingModal isOpen={isOpen} onClose={onClose}>
			<div className={s.container}>{children}</div>
		</OverlayingModal>
	)
}
