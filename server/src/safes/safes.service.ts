import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { Category } from 'src/categories/categories.model'
import { Manufacturer } from 'src/manufacturers/manufacturers.model'
import { ProductImage } from 'src/productImages/productImages.model'
import { CreateSafeDto } from './dto/create-safe.dto'
import { ProductToCategories, Safe } from './safes.model'
import { ExtraValue } from 'src/extraValues/extraValues.model'

async function getProductsIdByCategoryId(categoriesId: number[], productToCategoriesRepository: any, categoryRepository: any) {
	const orCondition = categoriesId.map((el) => ({ category_id: el }))

	const safesId = await productToCategoriesRepository.findAll({
		where: {
			[Op.or]: orCondition,
		},
	})

	if (safesId.length) {
		return safesId
	} else {
		// получаем newCategoriesId
		const orCondition = categoriesId.map((el) => ({ category_parent_id: el }))
		const childCategories = await categoryRepository.findAll({
			where: {
				[Op.or]: orCondition,
			},
		})

		const newCategoriesId = childCategories.map((el) => el.dataValues.category_id)

		return getProductsIdByCategoryId(newCategoriesId, productToCategoriesRepository, categoryRepository)
	}
}

@Injectable()
export class SafesService {
	constructor(
		@InjectModel(Safe) private safeRepository: typeof Safe,
		@InjectModel(ProductToCategories) private productToCategoriesRepository: typeof ProductToCategories,
		@InjectModel(Category) private CategoryRepository: typeof Category,
	) {}

	async createSafe(dto: CreateSafeDto) {
		const safe = await this.safeRepository.create(dto)
		return safe
	}

	async getAllSafes(queryParams: { price?: string; weight?: string; categoryId?: string; page?: number; pageSize?: number }) {
		let where = {}

		let productsIdByCategoryId: { product_id: number }[] = null
		if (queryParams.categoryId) {
			productsIdByCategoryId = await getProductsIdByCategoryId(
				[Number(queryParams.categoryId)],
				this.productToCategoriesRepository,
				this.CategoryRepository,
			)

			where = {
				...where,
				[Op.or]: productsIdByCategoryId.map((el) => ({ product_id: el.product_id })),
			}
		}

		// ============================

		for (const key in queryParams) {
			switch (key) {
				case 'price':
					where = {
						...where,
						product_price: {
							[Op.between]: queryParams.price.split('-').map((el) => Number(el) || 0),
						},
					}
					break
				case 'weight':
					where = {
						...where,
						product_weight: {
							[Op.between]: queryParams.weight.split('-').map((el) => Number(el) || 0),
						},
					}
					break

				default:
					break
			}
		}

		// pagination
		const limitRows = queryParams.pageSize || 12 // по умолчанию 12 строк на странице
		const page = Number(queryParams.page) || 1 // по умолчанию первая страница
		const offset = (page - 1) * limitRows // определяем смещение
		const totalRows = await this.safeRepository.count({ where }) // общее количество строк без учета пагинации

		const safes = await this.safeRepository.findAll({
			limit: limitRows,
			offset: offset,
			include: [
				{ model: Manufacturer, as: 'manufacturer' },
				{ model: ProductImage, as: 'productImages', attributes: ['image_name'] },
				{
					model: ExtraValue,
					as: 'extraFieldValue3',
					attributes: ['name_ru-RU'],
				},
				{
					model: ExtraValue,
					as: 'extraFieldValue4',
					attributes: ['name_ru-RU'],
				},
				{
					model: ExtraValue,
					as: 'extraFieldValue8',
					attributes: ['name_ru-RU'],
				},
				{
					model: ExtraValue,
					as: 'extraFieldValue9',
					attributes: ['name_ru-RU'],
				},
				{
					model: ExtraValue,
					as: 'extraFieldValue20',
					attributes: ['name_ru-RU'],
				},
				{
					model: ExtraValue,
					as: 'extraFieldValue22',
					attributes: ['name_ru-RU'],
				},
			],
			where,
			order: [['product_id', 'ASC']],
		})


		return {
			pagination: {
				totalRows,
				totalPages: Math.ceil(totalRows / limitRows),
				currentPage: page,
			},
			list: safes.map((safe) => ({
				...safe.toJSON(),
				extra_field_3: safe.extraFieldValue3?.['name_ru-RU'] ?? safe.extra_field_3,
				extra_field_4: safe.extraFieldValue4?.['name_ru-RU'] ?? safe.extra_field_4,
				extra_field_8: safe.extraFieldValue8?.['name_ru-RU'] ?? safe.extra_field_8,
				extra_field_9: safe.extraFieldValue9?.['name_ru-RU'] ?? safe.extra_field_9,
				extra_field_20: safe.extraFieldValue20?.['name_ru-RU'] ?? safe.extra_field_20,
				extra_field_22: safe.extraFieldValue22?.['name_ru-RU'] ?? safe.extra_field_22,
			})),
		}
	}

	async getSelectedSafe(queryParam: { safeAlias: string }) {
		const selectedSafe = await this.safeRepository.findOne({
			where: {
				'alias_ru-RU': queryParam.safeAlias,
			},
			include: { model: ProductImage, as: 'productImages', attributes: ['image_name'] },
		})

		if (!selectedSafe) {
			throw new HttpException('product does not exist', HttpStatus.NOT_FOUND)
		}

		return selectedSafe
	}
}
