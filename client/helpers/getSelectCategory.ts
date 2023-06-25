import { CategoryType } from '@/models/ICategoriesStore'

export const getSelectCategory = (category: CategoryType, alias: string): CategoryType | null => {
	// Если текущий объект содержит выбранную категорию, вернуть его без дочерних категорий
	if (category['alias_ru-RU'] === alias) {
		return category
	}

	// Если текущий объект не содержит выбранную категорию, проверяем его дочерние категории
	if (category.child) {
		for (let i = 0; i < category.child.length; i++) {
			const result = getSelectCategory(category.child[i], alias)
			if (result !== null) {
				return result
			}
		}
	}

	return null
}
