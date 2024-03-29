import Link from 'next/link'
import { RefObject, useEffect, useRef } from 'react'
import { Button } from '@/components/Button/Button'
import { useProductStore } from '@/store/useProductStore'
import { HighlightText } from '@/components/HighLightText/HighLightText'
import { s } from './styles'

type PropsType = {
	inputRef: RefObject<HTMLInputElement>
	setIsShowPopover: (isShowPopover: boolean) => void
	isShow: boolean
	isMobileSearch: boolean | undefined
	selectSearchValue: () => void
}

export const SearchPopover = (props: PropsType) => {
	const { inputRef, isShow, isMobileSearch, setIsShowPopover, selectSearchValue } = props

	const popoverRef = useRef<HTMLInputElement>(null)
	const searchData = useProductStore((state) => state.searchData)
	const searchValue = useProductStore((state) => state.searchValue)

	useEffect(() => {
		if (isMobileSearch) return

		const handleClickOutside = (event: any) => {
			if (popoverRef.current && !popoverRef.current.contains(event.target) && !inputRef.current?.contains(event.target)) {
				setIsShowPopover(false)
			}
		}

		if (isShow) {
			document.addEventListener('click', handleClickOutside)
		} else {
			document.removeEventListener('click', handleClickOutside)
		}

		return () => document.removeEventListener('click', handleClickOutside)
	}, [isShow])

	if (!isShow || !searchData) return null

	const handleClickLink = () => setIsShowPopover(false)

	return (
		<div ref={popoverRef} className={s.searchPopover}>
			<ul className={s.list}>
				{searchData?.list.length ? (
					<>
						{searchData?.list.map((product) => (
							<Link
								key={product.product_id}
								className={s.listItem}
								onClick={handleClickLink}
								href={`/${product['alias_ru-RU']}`}
							>
								<HighlightText value={`${product['name_ru-RU']} (код: ${product.product_ean})`} highlight={searchValue} />
							</Link>
						))}
					</>
				) : (
					<li>
						Не найдено результатов по запросу: <span className={s.searchValue}>{searchValue}</span>
					</li>
				)}

				{!!searchData?.list?.length ? (
					<Button onClick={selectSearchValue} className={s.button}>
						Показать все ({searchData?.pagination?.totalRows})
					</Button>
				) : (
					<Button href="/catalog" className={s.button}>
						В каталог
					</Button>
				)}
			</ul>
		</div>
	)
}
