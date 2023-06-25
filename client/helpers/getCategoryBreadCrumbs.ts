import { BreadCrumbsType } from '@/components/BreadCrumbs/type'
import { CategoryType } from '@/models/ICategoriesStore'

export const getCategoryBreadCrumbs = (category: CategoryType, selectedId: string): BreadCrumbsType => {
	const breadcrumbs: BreadCrumbsType = []

	// Если текущая категория соответствует корневой категории, добавляем элемент с главной страницей в начало массива breadcrumbs
	if (category.category_parent_id === 0) {
		breadcrumbs.push({ name: 'Главная', isActive: false, to: '/' })
	}

	// Если текущая категория соответствует выбранной категории, добавляем текущую категорию в массив breadcrumbs
	if (category['alias_ru-RU'] === selectedId) {
		breadcrumbs.push({
			name: category['name_ru-RU'],
			isActive: true,
			to: `/${category['alias_ru-RU']}`,
		})
	}

	// Если текущая категория не соответствует выбранной категории и у нее есть дочерние категории, рекурсивно вызываем эту же функцию для каждой дочерней категории
	if (category.child) {
		for (let i = 0; i < category.child.length; i++) {
			const childBreadcrumbs = getCategoryBreadCrumbs(category.child[i], selectedId)
			if (childBreadcrumbs.length > 0) {
				// Если массив breadcrumbs не пустой, добавляем в начало массива текущую категорию и возвращаем его
				breadcrumbs.push({
					name: category['name_ru-RU'],
					isActive: false,
					to: `/${category['alias_ru-RU']}`,
				})
				return breadcrumbs.concat(childBreadcrumbs)
			}
		}
	}

	return breadcrumbs
}
