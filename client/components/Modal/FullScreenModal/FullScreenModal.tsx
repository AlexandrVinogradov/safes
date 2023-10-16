import { ReactNode } from 'react'
import { OverlayingModal } from '../OverlayingModal'
import { s } from './styles'
import clsx from 'clsx'

type PropsTypes = {
	isOpen: boolean
	children: ReactNode
	styles?: string
}

export const FullScreenModal = (props: PropsTypes) => {
	const { isOpen, children, styles } = props

	return (
		<OverlayingModal isOpen={isOpen} className={s.overlay}>
			<div className={clsx(s.wrapper, styles)}>{children}</div>
		</OverlayingModal>
	)
}
