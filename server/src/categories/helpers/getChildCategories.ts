import { Category } from '../categories.model'

export const getChildCategories = (categories: Category[], node: Category, lvl: number) => {
	const nextLvl = lvl + 1
	const filteredCategories = categories.filter((el) => node.category_id === el.category_parent_id)

	if (filteredCategories.length === 0) return null

	return filteredCategories.map((el) => ({
		lvl: nextLvl,
		...el.dataValues,
		child: getChildCategories(categories, el, nextLvl),
	}))
}
