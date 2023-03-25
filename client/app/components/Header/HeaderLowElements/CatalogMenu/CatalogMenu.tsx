import { Button } from '@/app/components/Button/Button'
import { container } from '@/app/styles/container'
import { MenuCategoryList } from './MenuCategoryList/MenuCategoryList'
import { s } from './styles'

type PropsType = {
	isHovering: boolean
	handleMouseOver: () => void
	handleMouseOut: () => void
}

export const CatalogMenu = (props: PropsType) => {
	const { isHovering, handleMouseOver, handleMouseOut } = props

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

	const lists = [
		{
			id: '1',
			list: {
				title: 'Взломостойкие сейфы',
				items: ['1 класс (описание)', '2 класс (описание)', '3 класс (описание)', '4 класс (описание)', '5 класс (описание)'],
			},
		},
		{
			id: '2',
			list: {
				title: 'Взломостойкие сейфы',
				items: ['1 класс (описание)', '2 класс (описание)', '3 класс (описание)', '4 класс (описание)', '5 класс (описание)'],
			},
		},
		{
			id: '3',
			list: {
				title: 'Взломостойкие сейфы',
				items: ['1 класс (описание)', '2 класс (описание)', '3 класс (описание)', '4 класс (описание)', '5 класс (описание)'],
			},
		},
		{
			id: '4',
			list: {
				title: 'Взломостойкие сейфы',
				items: ['1 класс (описание)', '2 класс (описание)', '3 класс (описание)', '4 класс (описание)', '5 класс (описание)'],
			},
		},
		{
			id: '5',
			list: {
				title: 'Взломостойкие сейфы',
				items: ['1 класс (описание)', '2 класс (описание)', '3 класс (описание)', '4 класс (описание)', '5 класс (описание)'],
			},
		},
	]

	const getLongList = (count: number) => {
		const newArr = []
		for (let i = 0; i < count; i++) {
			newArr.push(...lists)
		}

		return newArr
	}

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
							{getLongList(4).map((el) => (
								<MenuCategoryList key={el.id} list={el.list} />
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
