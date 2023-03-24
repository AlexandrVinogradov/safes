import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PropsType {
	children: ReactNode
}

export const Portal = (props: PropsType) => {
	const ref = useRef<Element | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('#portal')
		setMounted(true)
	}, [])

	return mounted && ref.current ? createPortal(<>{props.children}</>, ref.current) : null
}
