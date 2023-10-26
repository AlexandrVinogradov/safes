import { useModalStore } from '@/store/useModalStore'
import { ReactNode } from 'react'
import { CutModal } from '../Modals/CutModal/CutModal'

type PropsType = {
	children: ReactNode
	className?: string
}

export const CutButton = (props: PropsType) => {
	const { children, ...otherProps } = props

	const setIsCutModal = useModalStore((state) => state.setIsCutModal)

	const handleClickCutButton = () => setIsCutModal(true)

	return (
		<>
			<CutModal />

			<div onClick={handleClickCutButton} {...otherProps}>
				{children}
			</div>
		</>
	)
}
