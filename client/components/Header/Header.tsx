import { useEffect, useState } from 'react'
import { LargeHeader } from './LargeHeader/LargeHeader'
import { StickyHeader } from './StickyHeader/StickyHeader'

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(true)

	useEffect(() => {
		const LargeHeaderHeight = 159
		const StickyHeaderHeight = 88

		const handleScroll = () => {
			if (window.scrollY >= LargeHeaderHeight - StickyHeaderHeight) {
				setIsScrolled(false)
			} else {
				setIsScrolled(true)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			{isScrolled ? <LargeHeader /> : <StickyHeader />}
			<div className="h-[159px]" />
		</>
	)
}
