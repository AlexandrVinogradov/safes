import { useEffect, useRef, useState, KeyboardEvent } from 'react'
import { Input } from '@/components/Input/Input'
import { useProductStore } from '@/store/useProductStore'
import { SearchPopover } from './SearchPopover/SearchPopover'
import { SearchIcon } from '@/icons/SearchIcon'
import { Button } from '@/components/Button/Button'
import { useRouter } from 'next/router'
import { IconButton } from '@/components/IconButton/IconButton'
import clsx from 'clsx'
import { s } from './styles'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'
import { useDebounce } from '@/hooks/useDebounce'

type PropsType = {
	className?: string
}

export const Search = (props: PropsType) => {
	const { className } = props
	const [isShowPopover, setIsShowPopover] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const router = useRouter()
	const searchValue = useProductStore((state) => state.searchValue)
	const setSearchValue = useProductStore((state) => state.setSearchValue)
	const searchData = useProductStore((state) => state.searchData)
	const fetchProducts = useProductStore((state) => state.fetchProducts)
	const debouncedValue = useDebounce<string>(searchValue, 500)

	useEffect(() => {
		if (inputRef.current === document.activeElement && !!searchValue) {
			setIsShowPopover(true)
		} else {
			setIsShowPopover(false)
		}
	}, [!!searchValue])

	useEffect(() => {
		if (!searchValue) return
		const API_URL = getClientServerUrl('products')

		fetchProducts(`${API_URL}?search=${searchValue}`, searchValue)
	}, [debouncedValue])

	const selectSearchValue = () => {
		setIsShowPopover(false)
		// setSearchValue('')
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

	return (
		<div className={clsx(s.search, className)}>
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

				{isShowPopover && <IconButton onClick={selectSearchValue} className={s.searchIconButton} icon={<SearchIcon />} />}
				{!isShowPopover && (
					<Button onClick={selectSearchValue} className={s.searchButton}>
						Поиск
					</Button>
				)}
			</div>

			<SearchPopover
				inputRef={inputRef}
				isShow={isShowPopover}
				setIsShowPopover={setIsShowPopover}
				selectSearchValue={selectSearchValue}
			/>
		</div>
	)
}
