import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateSafeDto } from './dto/create-safe.dto'
import { Safe } from './safes.model'

@Injectable()
export class SafesService {
	constructor(@InjectModel(Safe) private safeRepository: typeof Safe) {}

	async createSafe(dto: CreateSafeDto) {
		const safe = await this.safeRepository.create(dto)
		return safe
	}

	async getAllSafes() {
		// all logic here

		const safes = await this.safeRepository.findAll({ limit: 16 })

		// this.safeRepository.hasMany(Player)
		// Player.belongsTo(Team)

		return safes
	}
}
