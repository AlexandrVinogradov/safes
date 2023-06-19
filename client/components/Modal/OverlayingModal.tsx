import { MouseEventHandler } from 'react'
import { Tenor_Sans, Noto_Sans } from 'next/font/google'
import { Portal } from './Portal'
import { s } from './styles'

type PropsTypes = {
	children: React.ReactNode
	onClose: MouseEventHandler<HTMLDivElement>
	isOpen: boolean
}
const noto_sans = Noto_Sans({
	weight: ['400', '700'],
	variable: '--font-noto-sans',
	display: 'swap',
	subsets: [
		// 'cyrillic',
		'latin',
	],
})

const tenor_sans = Tenor_Sans({
	weight: '400',
	variable: '--font-tenor-sans',
	display: 'swap',
	subsets: [
		// 'cyrillic',
		'latin',
	],
})

export const OverlayingModal = (props: PropsTypes) => {
	const { children, onClose, isOpen } = props

	if (!isOpen) return null

	return (
		<Portal>
			<div className={`${s.overlayingModalContainer} ${noto_sans.variable} ${tenor_sans.variable}`} role="dialog">
				<div className={s.overlay} role="button" tabIndex={0} onClick={onClose} />

				{children}
			</div>
		</Portal>
	)
}
