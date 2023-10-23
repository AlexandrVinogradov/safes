import { MouseEventHandler, ReactNode } from 'react'
import { OverlayingModal } from '../OverlayingModal'
import { s } from './styles'
import clsx from 'clsx'

type PropsTypes = {
	isOpen: boolean
	children: ReactNode
	styles?: string
	onClose?: MouseEventHandler<HTMLDivElement> | any
	overlayStyles?: string
}

export const FullScreenModal = (props: PropsTypes) => {
	const { isOpen, children, styles, overlayStyles, onClose } = props

	return (
		<OverlayingModal isOpen={isOpen} onClose={onClose} className={clsx(s.overlay, overlayStyles)}>
			<div className={clsx(s.wrapper, styles)}>{children}</div>
		</OverlayingModal>
	)
}
