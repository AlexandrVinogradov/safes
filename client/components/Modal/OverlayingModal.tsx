import { MouseEventHandler } from 'react'
import { Portal } from './Portal'
import { s } from './styles'

type PropsTypes = {
	children: React.ReactNode
	onClose: MouseEventHandler<HTMLDivElement>
	isOpen: boolean
}

export const OverlayingModal = (props: PropsTypes) => {
	const { children, onClose, isOpen } = props

	if (!isOpen) return null

	return (
		<Portal>
			<div className={s.overlayingModalContainer} role="dialog">
				<div className={s.overlay} role="button" tabIndex={0} onClick={onClose} />

				{children}
			</div>
		</Portal>
	)
}
