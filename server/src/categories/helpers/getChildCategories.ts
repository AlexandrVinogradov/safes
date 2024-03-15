import { Category } from '../categories.model'

export const getChildCategories = (categories: Category[], node: Category, lvl: number) => {
	const nextLvl = lvl + 1
	// TODO: Кажется тут надо сорт или на беке все сортировки должны быть??
	// UDP: если order === null в родительских встает на первое место
	const filteredCategories = categories.filter((el) => node.category_id === el.category_parent_id).sort((a, b) => a.ordering - b.ordering)

	if (filteredCategories.length === 0) return null

	return filteredCategories.map((el) => ({
		lvl: nextLvl,
		...el.dataValues,
		child: getChildCategories(categories, el, nextLvl),
	}))
}
