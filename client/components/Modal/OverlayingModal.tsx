import { MouseEventHandler } from 'react'
import { Portal } from './Portal'
import { s } from './styles'
import clsx from 'clsx'

type PropsTypes = {
	children: React.ReactNode
	onClose: MouseEventHandler<HTMLDivElement>
	isOpen: boolean
	className?: string
}

export const OverlayingModal = (props: PropsTypes) => {
	const { children, onClose, isOpen, className } = props

	if (!isOpen) return null

	return (
		<Portal>
			<div className={clsx(s.overlayingModalContainer, className)} role="dialog">
				<div className={s.overlay} role="button" tabIndex={0} onClick={onClose} />

				{children}
			</div>
		</Portal>
	)
}
