'use client'
import { Button } from '@/components/Button/Button'
import { container } from '@/styles/container'
import Link from 'next/link'
import { useEffect } from 'react'
import { s } from './styles'
import { useCategoriesStore } from '@/store/useCategoriesStore'

type PropsType = {
	isHovering: boolean
	handleMouseOver: () => void
	handleMouseOut: () => void
}

export const CatalogMenu = (props: PropsType) => {
	const { isHovering, handleMouseOver, handleMouseOut } = props

	const categories = useCategoriesStore((state) => state.categories)
	const fetchCategories = useCategoriesStore((state) => state.fetchCategories)

	useEffect(() => {
		fetchCategories(process.env.API_URL_CATEGORIES || '')
	}, [])

	const tags = [
		{ id: 'forHouse', name: 'Сейфы для дома' },
		{ id: 'forOffice', name: 'Сейфы для офиса' },
		{ id: 'forApartments', name: 'Сейфы для квартиры' },
		{ id: 'caches', name: 'Тайники' },
		{ id: 'forWatch', name: 'Для часов' },
		{ id: 'forLaptop', name: 'Для ноутбуков' },
		{ id: 'policeCabinets', name: 'Полицейские шкафы' },
		{ id: 'forHouse2', name: 'Сейфы для дома' },
	]
	return (
		<>
			{isHovering && (
				<div className={s.menu} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
					<div className={s.space} />
					<div className={container}>
						<div className={s.tags}>
							{tags.map((tag) => (
								<button key={tag.id} className={s.tag}>
									{tag.name}
								</button>
							))}
						</div>

						<div className={s.content}>
							{categories?.map((el) => (
								<div key={el['alias_ru-RU']}>
									<Link className="text-branded" href={el['alias_ru-RU']}>
										{el.name}
									</Link>
									{el.child?.map((ell: any) => (
										<div key={ell['alias_ru-RU']}>
											<Link href={ell['alias_ru-RU']}>{ell['name_ru-RU']}</Link>
										</div>
									))}
								</div>
							))}
						</div>

						<Button className={s.toCatalogButton} href="/catalog">
							В каталог
						</Button>
					</div>
				</div>
			)}
		</>
	)
}
