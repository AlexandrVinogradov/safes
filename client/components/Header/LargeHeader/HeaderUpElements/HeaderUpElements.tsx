import Link from 'next/link'
import { LogoIcon } from '@/icons/LogoIcon'
import { Contacts } from '../../../Contacts/Contacts'
import { Search } from '../../HeaderComponents/Search/Search'
import { useEffect, useState } from 'react'
import { IconButton } from '@/components/IconButton/IconButton'
import { SearchIcon } from '@/icons/SearchIcon'
import { s } from './styles'

export const HeaderUpElements = () => {
	const [isShowPopover, setIsShowPopover] = useState(false)
	const [isDesktop, setDesktop] = useState(false)

	const updateMedia = () => {
		setDesktop(window.innerWidth > 767)
	}

	useEffect(() => {
		setDesktop(window.innerWidth > 767)
		window.addEventListener('resize', updateMedia)
		return () => window.removeEventListener('resize', updateMedia)
	}, [])

	const handleClickMobileSearch = () => setIsShowPopover(true)

	return (
		<div className={s.mainWrapper}>
			<Link href="/">
				<LogoIcon className={s.logo} />
			</Link>

			{isDesktop && <Search isShowPopover={isShowPopover} setIsShowPopover={setIsShowPopover} className={s.search} />}

			<div className={s.lastBlock}>
				<IconButton
					className={s.mobileSearchButton}
					onClick={handleClickMobileSearch}
					icon={<SearchIcon />}
				/>
				{!isDesktop && <Search isMobileSearch isShowPopover={isShowPopover} setIsShowPopover={setIsShowPopover} />}

				<Contacts className={s.contacts} />
			</div>
		</div>
	)
}
