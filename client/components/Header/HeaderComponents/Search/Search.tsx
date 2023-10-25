import { useEffect, useRef, useState, KeyboardEvent } from 'react'
import { Input } from '@/components/Input/Input'
import { useProductStore } from '@/store/useProductStore'
import { SearchPopover } from './SearchPopover/SearchPopover'
import { SearchIcon } from '@/icons/SearchIcon'
import { Button } from '@/components/Button/Button'
import { useRouter } from 'next/router'
import { IconButton } from '@/components/IconButton/IconButton'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'
import { useDebounce } from '@/hooks/useDebounce'
import { CrossIcon } from '@/icons/CrossIcon'
import clsx from 'clsx'
import { s } from './styles'

type PropsType = {
	className?: string
	isMobileSearch?: boolean
	isShowPopover: boolean
	setIsShowPopover: (isShowPopover: boolean) => void
}

export const Search = (props: PropsType) => {
	const { className, isMobileSearch, isShowPopover, setIsShowPopover } = props

	const inputRef = useRef<HTMLInputElement>(null)

	const router = useRouter()
	const searchValue = useProductStore((state) => state.searchValue)
	const setSearchValue = useProductStore((state) => state.setSearchValue)
	const searchData = useProductStore((state) => state.searchData)
	const setSearchData = useProductStore((state) => state.setSearchData)
	const fetchProducts = useProductStore((state) => state.fetchProducts)
	const debouncedValue = useDebounce<string>(searchValue, 500)

	useEffect(() => {
		if (inputRef.current === document.activeElement && !!searchValue) {
			setIsShowPopover(true)
		} else if (!isMobileSearch) {
			setIsShowPopover(false)
		}

		if (searchData && !searchValue) setSearchData(null)
	}, [!!searchValue])

	useEffect(() => {
		if (isMobileSearch && inputRef.current) {
			inputRef.current.focus()
		}
	}, [isShowPopover, isMobileSearch])

	useEffect(() => {
		if (!searchValue) return
		const API_URL = getClientServerUrl('products')

		fetchProducts(`${API_URL}?search=${searchValue}`, searchValue)
	}, [debouncedValue])

	const selectSearchValue = () => {
		setIsShowPopover(false)
		if (!searchData?.list.length) {
			router.push('/catalog')
			return
		}
		router.push(`/search/result?search=${searchValue}`)
	}
	const handleChangeSearch = (e: string) => setSearchValue(e)
	const handleClickInput = () => searchValue && setIsShowPopover(true)
	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') selectSearchValue()
	}
	const handleClickCrossIcon = () => {
		setIsShowPopover(false)
	}

	if (isMobileSearch && !isShowPopover) return null

	return (
		<div className={clsx(s.search, isMobileSearch && s.mobileSearch, className)}>
			<div className={s.searchInputWrapper}>
				<Input
					onKeyDown={handleKeyDown}
					onClick={handleClickInput}
					inputRef={inputRef}
					value={searchValue}
					onChange={(e) => handleChangeSearch(e.target.value)}
					className={s.searchInput}
					placeholder="Введите текст поиска..."
				/>

				{isShowPopover && !isMobileSearch && (
					<IconButton onClick={selectSearchValue} className={s.searchIconButton} icon={<SearchIcon />} />
				)}
				{isShowPopover && isMobileSearch && (
					<IconButton onClick={handleClickCrossIcon} className={s.searchIconCross} icon={<CrossIcon />} />
				)}
				{!isShowPopover && !isMobileSearch && (
					<Button onClick={selectSearchValue} className={s.searchButton}>
						Поиск
					</Button>
				)}
			</div>

			<SearchPopover
				isMobileSearch={isMobileSearch}
				inputRef={inputRef}
				isShow={isShowPopover}
				setIsShowPopover={setIsShowPopover}
				selectSearchValue={selectSearchValue}
			/>
		</div>
	)
}
