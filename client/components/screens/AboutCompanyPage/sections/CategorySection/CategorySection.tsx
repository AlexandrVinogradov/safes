import { container } from '@/styles/container'
import { listDot } from '@/styles/listDot'
import clsx from 'clsx'
import Link from 'next/link'
import { s } from './styles'

export const CategorySection = () => {
	const categories = [
		{ id: 1, name: 'взломостойкий' },
		{ id: 2, name: 'огнестойкий' },
		{ id: 3, name: 'встраиваемый в стену' },
		{ id: 4, name: 'водонепроницаемый' },
		{ id: 5, name: 'оружейные' },
		{ id: 6, name: 'депозитные' },
		{ id: 7, name: 'для офиса' },
		{ id: 8, name: 'мебельные' },
		{ id: 9, name: 'для квартиры и дома' },
		{ id: 10, name: 'металлическая мебель' },
	]

	return (
		<section className={clsx(s.section, container)}>
			<h1 className={s.title}>У нас Вы можете купить сейф любого предназначения:</h1>

			<ul className={s.list}>
				{categories.map((el) => (
					<li key={el.id} className={clsx(listDot, s.listItem)}>
						<Link href="/catalog">{el.name}</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
