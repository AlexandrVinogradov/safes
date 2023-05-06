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
}
