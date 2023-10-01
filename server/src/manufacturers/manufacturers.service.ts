import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateManufacturerDto } from './dto/create-manufacturer.dto'
import { Manufacturer } from './manufacturers.model'

@Injectable()
export class ManufacturersService {
	constructor(@InjectModel(Manufacturer) private manufacturerRepository: typeof Manufacturer) {}

	async createManufacturer(dto: CreateManufacturerDto) {
		const manufacturer = await this.manufacturerRepository.create(dto)
		return manufacturer
	}

	async getAllManufacturers() {
		const manufacturers = await this.manufacturerRepository.findAll()
		return manufacturers
	}

	async getSelectedManufacturer(alias: string) {
		const manufacturer = await this.manufacturerRepository.findOne({ where: { 'alias_ru-RU': alias } })

		// FIXME: need norm handler
		return manufacturer
	}
}
