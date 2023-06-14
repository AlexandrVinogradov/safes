import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { Category } from 'src/categories/categories.model'
// import { ExtraValue } from 'src/extraValues/extraValues.model'
import { Manufacturer } from 'src/manufacturers/manufacturers.model'
import { ProductImage } from 'src/productImages/productImages.model'
import { CreateSafeDto } from './dto/create-safe.dto'
import { Safe } from './safes.model'

@Injectable()
export class SafesService {
	constructor(
		@InjectModel(Safe) private safeRepository: typeof Safe,
	) // @InjectModel(Category) private categoryRepository: typeof Category,
	{}

	async createSafe(dto: CreateSafeDto) {
		const safe = await this.safeRepository.create(dto)
		return safe
	}

	async getAllSafes(queryParams: { price?: string; weight?: string }) {
		let where: any = {
			// extra_field_3: {
			// 	[Op.endsWith]: '2',
			// },
			// extra_field_3: await this.extraValuesRepository.findAll({ limit: 1 }),
		}

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

		const safes = await this.safeRepository.findAll({
			limit: 16,
			include: [
				{ model: Manufacturer, as: 'manufacturer' },
				// { model: ProductImage, as: 'productImage' },
			],
			where,
		})

		// const safes = await this.safeRepository.query("SELECT * FROM `users`", { type: QueryTypes.SELECT })
		return safes
	}

	async getSelectedSafe(queryParam: { safeAlias: string }) {
		const selectedSafe = await this.safeRepository.findOne({
			where: {
				'alias_ru-RU': queryParam.safeAlias,
			},
			include: { model: ProductImage, as: 'productImage' },
		})

		if (!selectedSafe) {
			throw new HttpException('product does not exist', HttpStatus.NOT_FOUND)
		}

		console.log(selectedSafe['name_ru-RU'], '-------------------------')

		return selectedSafe
	}

	// // более менее ===================
	// async getSelectedSafe(queryParam: { safeAlias: string }) {
	// 	let selectedBox: any = null

	// 	if (selectedBox === null) {
	// 		selectedBox = await this.categoryRepository.findOne({
	// 			where: {
	// 				'alias_ru-RU': queryParam.safeAlias,
	// 			},
	// 		})
	// 		if (selectedBox !== null) return { box: 'cat', ...selectedBox }
	// 	}

	// 	if (selectedBox === null) {
	// 		selectedBox = await this.safeRepository.findOne({
	// 			where: {
	// 				'alias_ru-RU': queryParam.safeAlias,
	// 			},
	// 			// include: { model: ProductImage, as: 'productImage' },
	// 		})
	// 		if (selectedBox !== null) return { box: 'safe', ...selectedBox }
	// 	}
	// }
	// // более менее ===================

	// async getSelectedSafe(queryParam: { safeAlias: string }) {
	// let selectedBox: any = null

	// selectedBox = await this.safeRepository.findOne({
	// 	where: {
	// 		'alias_ru-RU': queryParam.safeAlias,
	// 	},
	// 	include: { model: ProductImage, as: 'productImage', attributes: { exclude: ['safeId'] } },
	// 	attributes: { exclude: ['productImageId'] },
	// })

	// if (selectedBox !== null) {
	// 	// Если запись найдена в таблице safe, добавляем значение "box: 'safe'"
	// 	return { box: 'safe', ...selectedBox.toJSON() }
	// }

	// selectedBox = await this.categoryRepository.findOne({
	// 	where: {
	// 		'alias_ru-RU': queryParam.safeAlias,
	// 	},
	// })

	// if (selectedBox !== null) {
	// 	// Если запись найдена в таблице category, добавляем значение "box: 'cat'"
	// 	return { box: 'cat', ...selectedBox.toJSON() }
	// }

	// throw new Error(`Элемент с алиасом "${queryParam.safeAlias}" не найден`)
	// }
}
