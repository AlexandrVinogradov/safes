import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateCategoryDto } from './dto/create-category.dto'
import { Category } from './categories.model'

@Injectable()
export class CategoriesService {
	constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

	async createCategory(dto: CreateCategoryDto) {
		const category = await this.categoryRepository.create(dto)
		return category
	}

	async getAllCategories(): Promise<any> {
		const categories = await this.categoryRepository.findAll()

		const categoriesMap = []

		const getChild = (categories: any, node: any, lvl: number) => {
			const nextLvl = lvl + 1
			const filteredCategories = categories.filter((el) => node.category_id === el.category_parent_id)

			if (filteredCategories.length === 0) return null

			return filteredCategories.map((el) => ({
				lvl: nextLvl,
				...el.dataValues,
				child: getChild(categories, el, nextLvl),
			}))
		}

		categories.forEach((el) => {
			if (el.category_parent_id === 0) {
				categoriesMap.push({
					name: el['name_ru-RU'],
					category_parent_id: el.category_parent_id,
					category_id: el.category_id,
					lvl: 1,
					...el.dataValues,
					child: getChild(categories, el, 1),
				})
			}
		})

		return categoriesMap
	}
}
