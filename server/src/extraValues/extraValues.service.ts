import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateExtraValueDto } from './dto/create-extraValues.dto'
import { ExtraValue } from './extraValues.model'

@Injectable()
export class ExtraValuesService {
	constructor(@InjectModel(ExtraValue) private extraValueRepository: typeof ExtraValue) {}

	async createExtraValue(dto: CreateExtraValueDto) {
		const extraValue = await this.extraValueRepository.create(dto)
		return extraValue
	}

	async getAllExtraValues() {
		const extraValues = await this.extraValueRepository.findAll()

		return extraValues
	}
}
