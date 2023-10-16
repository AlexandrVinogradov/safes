import { MouseEventHandler, ReactNode } from 'react'
import { CrossIcon } from '@/icons/CrossIcon'
import { OverlayingModal } from '../OverlayingModal'
import { IconButton } from '../../IconButton/IconButton'
import { s } from './styles'
import clsx from 'clsx'

type PropsTypes = {
	isOpen: boolean
	onClose: MouseEventHandler<HTMLDivElement> | any
	children: ReactNode
	styles?: string
}

export const MobileModal = (props: PropsTypes) => {
	const { isOpen, onClose, children, styles } = props

	return (
		<OverlayingModal isOpen={isOpen} onClose={onClose} className={s.overlay}>
			<div className={clsx(s.wrapper, styles)}>
				<header className={s.header}>
					Меню
					<IconButton onClick={onClose} icon={<CrossIcon />}  />
				</header>

				{children}
			</div>
		</OverlayingModal>
	)
}
