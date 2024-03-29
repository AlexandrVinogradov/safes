import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op, Order, literal } from 'sequelize'
import { Category } from 'src/categories/categories.model'
import { Manufacturer } from 'src/manufacturers/manufacturers.model'
import { ProductImage } from 'src/productImages/productImages.model'
import { CreateSafeDto, UpdateSafeDto } from './dto/create-safe.dto'
import * as fs from 'fs'
import { ProductToCategories, ProductsRelations, Safe } from './safes.model'
import { ExtraValue } from 'src/extraValues/extraValues.model'
import { stringNullOrNumber } from './helpers/stringNullOrNumber'
import { SAFES_FILES_PATH } from 'src/utils/constants'

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

type HardSearch = {
	'name_ru-RU': string
	product_ean: string
	product_price: number
}

@Injectable()
export class SafesService {
	constructor(
		@InjectModel(Safe) private safeRepository: typeof Safe,
		@InjectModel(ProductImage) private productImageRepository: typeof ProductImage,
		@InjectModel(ProductToCategories) private productToCategoriesRepository: typeof ProductToCategories,
		@InjectModel(Category) private CategoryRepository: typeof Category,
		@InjectModel(ProductsRelations) private productsRelationsRepository: typeof ProductsRelations,
	) {}

	async updateProductRelations(id: number, relatedSafes: string) {
		const relatedSafeIds = relatedSafes.split(',').map(Number).filter(Boolean)
		await this.productsRelationsRepository.destroy({ where: { product_id: id } })

		if (relatedSafes === '') return
		const newRelationsDto = relatedSafeIds.map((relatedSafeId) => ({
			product_id: id,
			product_related_id: relatedSafeId,
		}))

		await this.productsRelationsRepository.bulkCreate(newRelationsDto, { ignoreDuplicates: true })
	}
	async updateProductCategories(id: number, categories: string) {
		const categoriesIds = categories.split(',').map(Number).filter(Boolean)

		await this.productToCategoriesRepository.destroy({ where: { product_id: id } })

		if (categories === '') return
		const newCategoriesDto = categoriesIds.map((categoryId) => ({
			product_id: id,
			category_id: categoryId,
			product_ordering: 0,
		}))

		await this.productToCategoriesRepository.bulkCreate(newCategoriesDto, { ignoreDuplicates: true })
	}

	async createSafe(dto: CreateSafeDto, imageNames: string[]) {
		const { categories, relatedSafes, extra_field_3, extra_field_9, extra_field_8, extra_field_4, extra_field_20, ...newDto } = dto

		const parsedDto = {
			extra_field_4: stringNullOrNumber(extra_field_4),
			extra_field_3: stringNullOrNumber(extra_field_3),
			extra_field_9: stringNullOrNumber(extra_field_9),
			extra_field_8: stringNullOrNumber(extra_field_8),
			extra_field_20: stringNullOrNumber(extra_field_20),
		}

		// в safes записали картинку (первая из imageNames[])
		const safe = await this.safeRepository.create({ ...newDto, ...parsedDto, image: imageNames?.[0] || null })

		if (imageNames && imageNames.length > 0) {
			// Создали productImagesDto
			const productImagesDto = imageNames.map((imageName, id) => ({
				product_id: safe.product_id,
				image_name: imageName,
				ordering: ++id,
			}))
			// Записали новые картинки (все из imageNames[]) в product_images
			await this.productImageRepository.bulkCreate(productImagesDto, { ignoreDuplicates: true })
		}

		// Вызов метода для категорий
		await this.updateProductCategories(safe.product_id, categories)
		// Вызов метода для обновления связей
		await this.updateProductRelations(safe.product_id, relatedSafes)

		return {
			status: 200,
			data: safe,
			message: `Товар ${safe['name_ru-RU']} успешно создан`,
		}
	}

	async updateSafe(id: number, dto: UpdateSafeDto, imageNames: string[]) {
		const { categories, relatedSafes, extra_field_3, extra_field_9, extra_field_8, extra_field_4, extra_field_20, ...newDto } = dto

		const parsedDto = {
			extra_field_4: stringNullOrNumber(extra_field_4),
			extra_field_3: stringNullOrNumber(extra_field_3),
			extra_field_9: stringNullOrNumber(extra_field_9),
			extra_field_8: stringNullOrNumber(extra_field_8),
			extra_field_20: stringNullOrNumber(extra_field_20),
		}

		const safe = await this.safeRepository.findByPk(id)
		if (!safe) throw new NotFoundException(`Товар с id: ${id} не найден в базе данных`)

		// Вызов метода для категорий
		await this.updateProductCategories(id, categories)
		// Вызов метода для обновления связей
		await this.updateProductRelations(id, relatedSafes)

		// Получаем список текущих картинок
		const existingImages = await this.productImageRepository.findAll({ where: { product_id: id } })
		// Удаляем только существующие изображения
		for (const image of existingImages) {
			const imagePath = `${process.env.FILES_PATH}${SAFES_FILES_PATH}/${image.image_name}`
			if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
		}

		// в safes обновили картинку (первая из imageNames[])
		await this.safeRepository.update({ ...newDto, ...parsedDto, image: imageNames?.[0] || null }, { where: { product_id: id } })
		// Удалили все картинки в product_images
		await this.productImageRepository.destroy({ where: { product_id: id } })
		if (imageNames && imageNames.length > 0) {
			// Создали productImagesDto
			const productImagesDto = imageNames.map((imageName, id) => ({
				product_id: safe.product_id,
				image_name: imageName,
				ordering: ++id,
			}))
			// Записали новые картинки (все из imageNames[]) в product_images
			await this.productImageRepository.bulkCreate(productImagesDto, { ignoreDuplicates: true })
		}

		return {
			status: 200,
			data: safe,
			message: `Товар: ${safe['name_ru-RU']} успешно обновлен`,
		}
	}

	async updateSafePublish(id: number, isPublish: boolean) {
		const safe = await this.safeRepository.findByPk(id)

		await this.safeRepository.update({ product_publish: isPublish }, { where: { product_id: id } })

		if (!safe) throw new NotFoundException(`Товар с id: ${id} не найден в базе данных`)

		return {
			status: 200,
			data: safe,
			message: `Публикация: ${safe['name_ru-RU']} успешно обновлена`,
		}
	}

	async deleteSafe(id: number) {
		const deletedSafe = await this.safeRepository.findByPk(id)

		// Вызов метода удаления связанных категорий
		await this.updateProductCategories(deletedSafe.product_id, '')
		// Вызов метода удаления связанных товаров
		await this.updateProductRelations(deletedSafe.product_id, '')

		if (!deletedSafe) throw new NotFoundException(`Товар с id: ${id} не найден в базе данных`)

		const imageNames = await this.productImageRepository.findAll({ where: { product_id: id } })

		if (imageNames.length > 0) {
			// Delete all images form folder safes
			imageNames.forEach((el) => {
				const imagePath = `${process.env.FILES_PATH}${SAFES_FILES_PATH}/${el.image_name}`

				if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
			})
		}
		// Delete all rows with product_id === id from ProductImages
		await this.productImageRepository.destroy({ where: { product_id: id } })
		await this.safeRepository.destroy({ where: { product_id: id } })

		return {
			status: 200,
			data: deletedSafe,
			message: `Товар: ${deletedSafe['name_ru-RU']} успешно удален`,
		}
	}

	async getAllSafes(
		queryParams: {
			// filter
			price?: string
			weight?: string
			burglaryResistance?: string
			manufacturer?: string
			fireResistance?: string
			keyType?: string
			gunCount?: string
			metalThickness?: string
			height?: string
			width?: string
			depth?: string
			// category
			categoryId?: string
			// manufacturer
			manufacturerId?: string
			// pagination
			page?: number
			pageSize?: number
			// sort
			sort?: string
			// search
			search?: string
			// other
			product_publish?: string
		} & HardSearch,
	) {
		let where = {}

		// Sort
		let order: Order = [['product_id', 'ASC']]
		if (queryParams.sort) {
			const sortArr = queryParams.sort.split('*')
			const value = sortArr[0]
			const orderType = sortArr[1]

			order = [[value, orderType]]
		}

		// Category
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

		// Manufacturer
		if (queryParams.manufacturerId) {
			where = {
				product_manufacturer_id: queryParams.manufacturerId,
				...where,
			}
		}

		// ============================

		for (const key in queryParams) {
			switch (key) {
				case 'name_ru-RU':
					where = {
						...where,
						'name_ru-RU': { [Op.iLike]: `%${queryParams['name_ru-RU']}%` },
					}
					break
				case 'product_ean':
					where = {
						...where,
						product_ean: { [Op.iLike]: `%${queryParams.product_ean}%` },
					}
					break
				case 'product_price':
					where = {
						...where,
						product_price: { [Op.eq]: Number(queryParams.product_price) },
					}
					break
				// ====================================================================================================================================
				case 'product_publish':
					where = {
						...where,
						product_publish: Boolean(Number(queryParams.product_publish)),
					}
					break
				case 'search':
					where = {
						...where,
						[Op.or]: [
							{ ['name_ru-RU']: { [Op.iLike]: `%${queryParams.search}%` } },
							{ product_ean: { [Op.iLike]: `%${queryParams.search}%` } },
						],
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
				case 'manufacturer':
					where = {
						...where,
						product_manufacturer_id: {
							[Op.or]: queryParams.manufacturer.split('-').map((el) => Number(el)),
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
				case 'height':
					const [minHeight, maxHeight] = queryParams.height.split('-')

					where = {
						...where,
						[Op.and]: [
							literal(`
							extra_field_10 <> '' 
							AND (
								(
									extra_field_10 ~ '^[0-9]+$' -- Проверка на то, что значение состоит только из цифр
									AND CAST(extra_field_10 AS INTEGER) >= ${minHeight}
									AND CAST(extra_field_10 AS INTEGER) <= ${maxHeight}
								)
								OR
								extra_field_10 IS NULL
							)
						`),
						],
					}
					break
				case 'width':
					const [minWidth, maxWidth] = queryParams.width.split('-')

					where = {
						...where,
						[Op.and]: [
							literal(`
							extra_field_11 <> '' 
							AND (
								(
									extra_field_11 ~ '^[0-9]+$' -- Проверка на то, что значение состоит только из цифр
									AND CAST(extra_field_11 AS INTEGER) >= ${minWidth}
									AND CAST(extra_field_11 AS INTEGER) <= ${maxWidth}
								)
								OR
								extra_field_11 IS NULL
							)
						`),
						],
					}
					break
				case 'depth':
					const [minDepth, maxDepth] = queryParams.depth.split('-')

					where = {
						...where,
						[Op.and]: [
							literal(`
							extra_field_12 <> '' 
							AND (
								(
									extra_field_12 ~ '^[0-9]+$' -- Проверка на то, что значение состоит только из цифр
									AND CAST(extra_field_12 AS INTEGER) >= ${minDepth}
									AND CAST(extra_field_12 AS INTEGER) <= ${maxDepth}
								)
								OR
								extra_field_12 IS NULL
							)
						`),
						],
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
				'image',
				'product_id',
				'name_ru-RU',
				'product_old_price',
				'product_price',
				'product_ean',
				'product_publish',
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
				'short_description_ru-RU',
				'createdAt',
				'updatedAt',
			],
			include: [
				{ model: Manufacturer, as: 'manufacturer', attributes: ['name_ru-RU'] },
				{ model: ProductImage, as: 'productImages', attributes: ['image_name'] },
				{ model: ProductToCategories, as: 'categories', attributes: ['category_id', 'product_id', 'product_ordering'] },

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

	// ###################################
	// ####### GET SELECTED SAFE   #######
	// #######                     #######
	// ###################################

	async getSelectedSafe(queryParam: { safeAlias: string }) {
		const selectedSafe = await this.safeRepository.findOne({
			where: {
				'alias_ru-RU': queryParam.safeAlias,
			},
			include: [
				{ model: ProductImage, as: 'productImages', attributes: ['image_name'] },
				{ model: Manufacturer, as: 'manufacturer', attributes: ['name_ru-RU', 'manufacturer_id'] },
				{ model: ProductToCategories, as: 'categories', attributes: ['category_id', 'product_id', 'product_ordering'] },
			],
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
				'image',
				'product_id',
				'name_ru-RU',
				'product_old_price',
				'product_price',
				'product_ean',
				'product_publish',
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
				{ model: Manufacturer, as: 'manufacturer', attributes: ['name_ru-RU', 'manufacturer_id'] },
			],
			where: {
				product_id: relatedSafesIdList,
			},
		})

		return relatedSafes
	}
}
