import clsx from 'clsx'
import { useState } from 'react'
import { s } from './styles'

export const ProductsMenu = () => {
	const [activeButtonId, setActiveButtonId] = useState('recommendation')

	const menu = [
		{ id: 'recommendation', name: 'Рекомендуем' },
		{ id: 'forHome', name: 'Для дома' },
		{ id: 'forOffice', name: 'Для офиса' },
		{ id: 'armory', name: 'Оружейные' },
		{ id: 'embedded', name: 'Встраиваемые' },
		{ id: 'burglaryResistant', name: 'Взломостойкие' },
		{ id: 'apartment', name: 'Для квартиры' },
		{ id: 'furniture', name: 'Мебельные' },
		{ id: 'hotel', name: 'Гостиничные' },
	]

	const handleMenuButtonClick = (buttonId: string) => setActiveButtonId(buttonId)

	return (
		<nav className={s.productsMenu}>
			<ul className={s.menuList}>
				{menu.map((item) => (
					<li key={item.id}>
						<button
							onClick={() => handleMenuButtonClick(item.id)}
							className={clsx(s.button, activeButtonId === item.id && s.activeMenuButton)}
						>
							{item.name}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}
