import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { Manufacturer } from 'src/manufacturers/manufacturers.model'
import { CreateSafeDto } from './dto/create-safe.dto'
import { Safe } from './safes.model'

@Injectable()
export class SafesService {
	constructor(@InjectModel(Safe) private safeRepository: typeof Safe) {}

	async createSafe(dto: CreateSafeDto) {
		const safe = await this.safeRepository.create(dto)
		return safe
	}

	async getAllSafes(weight: string) {
		const where = weight
			? {
					product_weight: {
						[Op.gte]: weight,
					},
			  }
			: {}

		console.log(where)

		const safes = await this.safeRepository.findAll({
			limit: 16,
			include: [{ model: Manufacturer, as: 'manufacturer' }],
			where,
		})

		return safes
	}
}
