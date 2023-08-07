import { MouseEventHandler, ReactNode } from 'react'
import Image from 'next/image'
import { CloseIcon } from '@/icons/CloseIcon'
import { OverlayingModal } from '../OverlayingModal'
import { IconButton } from '../../IconButton/IconButton'
import bg from '../../../public/bgTexture.png'
import { s } from './styles'
import clsx from 'clsx'

type PropsTypes = {
	isOpen: boolean
	onClose: MouseEventHandler<HTMLDivElement> | any
	children: ReactNode
	styles?: string
}

export const MainModal = (props: PropsTypes) => {
	const { isOpen, onClose, children, styles } = props

	return (
		<OverlayingModal isOpen={isOpen} onClose={onClose}>
			<div className={s.container}>
				<div
					className={clsx(s.wrapper, styles)}
					style={{
						backgroundImage: `url(${bg.src})`,
						backgroundSize: 'cover',
					}}
				>
					<IconButton onClick={onClose} icon={<CloseIcon />} className={s.closeButton} />

					<Image className={s.bgImg} src="/semiShieldModal.png" alt="Промет лого" width={222} height={535} />

					{children}
				</div>
			</div>
		</OverlayingModal>
	)
}
