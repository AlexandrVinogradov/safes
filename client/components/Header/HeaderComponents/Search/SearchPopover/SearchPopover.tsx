import { RefObject, useEffect, useRef } from 'react'
import { Button } from '@/components/Button/Button'
import Link from 'next/link'
import { s } from './styles'
import { useProductStore } from '@/store/useProductStore'

type PropsType = {
	inputRef: RefObject<HTMLInputElement>
	setIsShowPopover: (isShowPopover: boolean) => void
	isShow: boolean
	selectSearchValue: () => void
}

export const SearchPopover = (props: PropsType) => {
	const { inputRef, isShow, setIsShowPopover, selectSearchValue } = props

	const popoverRef = useRef<HTMLInputElement>(null)
	const searchData = useProductStore((state) => state.searchData)
	const searchValue = useProductStore((state) => state.searchValue)

	useEffect(() => {
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

	if (!isShow) return null

	return (
		<div ref={popoverRef} className={s.searchPopover}>
			<ul className={s.list}>
				{searchData?.list.length ? (
					<>
						{searchData?.list.map((product: any) => (
							<Link key={product.product_id} className={s.listItem} href={`/${product['alias_ru-RU']}`}>
								{product['name_ru-RU']} (код: {product.product_ean})
							</Link>
						))}
					</>
				) : (
					<li>
						Не найдено результатов по запросу: "<span className="text-branded font-semibold">{searchValue}</span>"
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
