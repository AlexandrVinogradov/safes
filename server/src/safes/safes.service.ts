import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op, Order } from 'sequelize'
import { Category } from 'src/categories/categories.model'
import { Manufacturer } from 'src/manufacturers/manufacturers.model'
import { ProductImage } from 'src/productImages/productImages.model'
import { CreateSafeDto } from './dto/create-safe.dto'
import { ProductToCategories, ProductsRelations, Safe } from './safes.model'
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
		@InjectModel(ProductsRelations) private productsRelationsRepository: typeof ProductsRelations,
	) {}

	async createSafe(dto: CreateSafeDto) {
		const safe = await this.safeRepository.create(dto)
		return safe
	}

	async getAllSafes(queryParams: {
		// filter
		price?: string
		weight?: string
		burglaryResistance?: string
		fireResistance?: string
		keyType?: string
		gunCount?: string
		metalThickness?: string
		// category
		categoryId?: string
		// pagination
		page?: number
		pageSize?: number
		// sort
		sort?: string
		// search
		search?: string
		// other
		isPublish?: string
	}) {
		let where = {}

		// Sort
		let order: Order = [['product_id', 'ASC']]
		if (queryParams.sort) {
			const sortArr = queryParams.sort.split('*')
			const value = sortArr[0]
			const orderType = sortArr[1]

			order = [[value, orderType]]
		}

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
				case 'isPublish':
					where = {
						...where,
						// FIXME: не отдавать на фронт product_publish
						product_publish: Boolean(queryParams.isPublish),
					}
					break
				case 'search':
					where = {
						...where,
						['name_ru-RU']: {
							// 	[Op.iLike]: `%${queryParams.search}%`,
							[Op.iRegexp]: `(${queryParams.search.replace(/\s+/g, '|')})`,
						},
					}
					break
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
				case 'burglaryResistance':
					where = {
						...where,
						extra_field_3: {
							[Op.or]: queryParams.burglaryResistance.split('-').map((el) => Number(el)),
						},
					}
					break
				case 'fireResistance':
					where = {
						...where,
						extra_field_4: {
							[Op.or]: queryParams.fireResistance.split('-').map((el) => Number(el)),
						},
					}
					break
				case 'keyType':
					where = {
						...where,
						extra_field_9: {
							[Op.or]: queryParams.keyType.split('-').map((el) => Number(el)),
						},
					}
					break
				case 'gunCount':
					where = {
						...where,
						extra_field_8: {
							[Op.or]: queryParams.gunCount.split('-').map((el) => Number(el)),
						},
					}
					break
				case 'metalThickness':
					where = {
						...where,
						extra_field_20: {
							[Op.or]: queryParams.metalThickness.split('-').map((el) => Number(el)),
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
			attributes: [
				'product_id',
				'name_ru-RU',
				'product_old_price',
				'product_price',
				'product_ean',
				'alias_ru-RU',
				'product_weight',
				'extra_field_3',
				'extra_field_4',
				'extra_field_8',
				'extra_field_9',
				'extra_field_20',
				'extra_field_22',
				'extra_field_13',
				'extra_field_15',
				'extra_field_17',
			],
			include: [
				{ model: Manufacturer, as: 'manufacturer', attributes: ['name_ru-RU'] },
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
			order,
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
			include: [{ model: ProductImage, as: 'productImages', attributes: ['image_name'] }],
		})

		if (!selectedSafe) {
			throw new HttpException('product does not exist', HttpStatus.NOT_FOUND)
		}

		const relatedSafes = await this.getRelatedSafes(selectedSafe)

		return {
			...selectedSafe.toJSON(),
			relatedSafes,
		}
	}

	// ###################################
	// ####### GET RELATED SAFES   #######
	// ####### FOR getSelectedSafe #######
	// ###################################
	async getRelatedSafes(selectedSafe: Safe) {
		const relatedSafesObjIdList = await this.productsRelationsRepository.findAll({
			attributes: ['product_related_id'],
			where: {
				product_id: selectedSafe.product_id,
			},
		})

		const relatedSafesIdList = relatedSafesObjIdList.map((el) => el.product_related_id)

		const relatedSafes = await this.safeRepository.findAll({
			attributes: [
				'product_id',
				'name_ru-RU',
				'product_old_price',
				'product_price',
				'product_ean',
				'alias_ru-RU',
				'product_weight',
				'extra_field_3',
				'extra_field_4',
				'extra_field_8',
				'extra_field_9',
				'extra_field_20',
				'extra_field_22',
				'extra_field_13',
				'extra_field_15',
				'extra_field_17',
			],
			include: [
				{ model: ProductImage, as: 'productImages', attributes: ['image_name'] },
				{ model: Manufacturer, as: 'manufacturer', attributes: ['name_ru-RU'] },
			],
			where: {
				product_id: relatedSafesIdList,
			},
		})

		return relatedSafes
	}
}
