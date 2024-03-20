import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import * as fs from 'fs'
import { CreateCategoryDto, UpdateCategoryDto } from './dto/create-category.dto'
import { Category } from './categories.model'
import { Op } from 'sequelize'
import { getChildCategories } from './helpers/getChildCategories'
import { CATEGORIES_FILES_PATH } from 'src/utils/constants'

@Injectable()
export class CategoriesService {
	constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

	async createCategory(dto: CreateCategoryDto, imageNames: string[]) {
		const category = await this.categoryRepository.create({ ...dto, category_image: imageNames?.[0] || null })

		return {
			status: 200,
			data: category,
			message: `Категория ${category['name_ru-RU']} успешно создана`,
		}
	}

	async updateCategory(id: number, dto: UpdateCategoryDto, imageNames: string[]) {
		const category = await this.categoryRepository.findByPk(id)

		await this.categoryRepository.update({ ...dto, category_image: imageNames?.[0] || null }, { where: { category_id: id } })

		if (!category) throw new NotFoundException(`Категория с id: ${id} не найдена в базе данных`)

		if (category.category_image) {
			const imagePath = `${process.env.FILES_PATH}${CATEGORIES_FILES_PATH}/${category.category_image}`

			if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
		}

		return {
			status: 200,
			data: category,
			message: `Категория: ${category['name_ru-RU']} успешно обновлена`,
		}
	}

	async updateCategoryPublish(id: number, isPublish: boolean) {
		const category = await this.categoryRepository.findByPk(id)

		await this.categoryRepository.update({ category_publish: isPublish }, { where: { category_id: id } })

		if (!category) throw new NotFoundException(`Категория с id: ${id} не найдена в базе данных`)

		return {
			status: 200,
			data: category,
			message: `Публикация: ${category['name_ru-RU']} успешно обновлена`,
		}
	}

	async deleteCategory(id: number) {
		const deletedCategory = await this.categoryRepository.findByPk(id)

		if (!deletedCategory) throw new NotFoundException(`Категория с id: ${id} не найдена в базе данных`)

		if (deletedCategory.category_image) {
			const imagePath = `${process.env.FILES_PATH}${CATEGORIES_FILES_PATH}/${deletedCategory.category_image}`

			if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
		}

		await this.categoryRepository.destroy({ where: { category_id: id } })

		return {
			status: 200,
			data: deletedCategory,
			message: `Категория: ${deletedCategory['name_ru-RU']} успешно удалена`,
		}
	}

	// FIXME: add type
	async getAllCategories(queryParams: { isPublish?: 'true' }): Promise<any> {
		let where = {}
		if (Boolean(queryParams.isPublish)) {
			where = {
				...where,
				category_publish: Boolean(queryParams.isPublish),
			}
		}

		const categories = await this.categoryRepository.findAll({
			order: [['ordering', 'ASC']],
			where,
		})

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
