import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { Manufacturer } from 'src/manufacturers/manufacturers.model'
import { ProductImage } from 'src/productImages/productImages.model'
import { CreateSafeDto } from './dto/create-safe.dto'
import { Safe } from './safes.model'

@Injectable()
export class SafesService {
	constructor(@InjectModel(Safe) private safeRepository: typeof Safe) {}

	async createSafe(dto: CreateSafeDto) {
		const safe = await this.safeRepository.create(dto)
		return safe
	}

	async getAllSafes(queryParams: { price?: string; weight?: string }) {
		let where = {}

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
				// { model: ProductImage, as: 'MyImages' },
			],
			where,
		})

		return safes
	}
}
