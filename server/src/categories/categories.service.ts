import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateCategoryDto } from './dto/create-category.dto'
import { Category } from './categories.model'
import { Op } from 'sequelize'
import { getChildCategories } from './helpers/getChildCategories'

@Injectable()
export class CategoriesService {
	constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

	async createCategory(dto: CreateCategoryDto) {
		const category = await this.categoryRepository.create(dto)
		return category
	}

	// FIXME: add type
	async getAllCategories(): Promise<any> {
		const categories = await this.categoryRepository.findAll()

		const categoriesMap = []

		categories.forEach((el) => {
			if (el.category_parent_id === 0) {
				categoriesMap.push({
					name: el['name_ru-RU'],
					category_parent_id: el.category_parent_id,
					category_id: el.category_id,
					lvl: 1,
					...el.dataValues,
					child: getChildCategories(categories, el, 1),
				})
			}
		})

		return categoriesMap
	}

	async getSelectedCategory(id: string) {
		const selectedCategory = await this.categoryRepository.findOne({ where: { 'alias_ru-RU': id } })
		const selectedCategoryId = selectedCategory.dataValues.category_id
		const selectedCategoryParentId = selectedCategory.dataValues.category_parent_id

		let conditions = [
			// selected
			{ category_id: selectedCategoryId },
			// child
			{ category_parent_id: selectedCategoryId },
			// parent
			{ category_id: selectedCategoryParentId },
		]

		const parentCategory = await this.categoryRepository.findOne({ where: { category_id: selectedCategoryParentId } })
		if (selectedCategoryParentId && parentCategory.dataValues.category_id !== 0) {
			conditions = [
				...conditions,
				// grandparent
				{ category_id: parentCategory.dataValues.category_parent_id },
			]
		}

		const relativeCategories = await this.categoryRepository.findAll({ where: { [Op.or]: conditions } })

		const categoriesMap = []

		relativeCategories.forEach((el) => {
			if (el.category_parent_id === 0) {
				categoriesMap.push({
					name: el['name_ru-RU'],
					category_parent_id: el.category_parent_id,
					category_id: el.category_id,
					lvl: 1,
					...el.dataValues,
					child: getChildCategories(relativeCategories, el, 1),
				})
			}
		})

		return categoriesMap[0]
	}
}
