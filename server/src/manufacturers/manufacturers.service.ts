import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateManufacturerDto } from './dto/create-manufacturer.dto'
import { Country, Manufacturer } from './manufacturers.model'

@Injectable()
export class ManufacturersService {
	constructor(@InjectModel(Manufacturer) private manufacturerRepository: typeof Manufacturer) {}

	async createManufacturer(dto: CreateManufacturerDto) {
		const manufacturer = await this.manufacturerRepository.create(dto)
		return manufacturer
	}

	async getAllManufacturers() {
		const manufacturers = await this.manufacturerRepository.findAll({
			include: [{ model: Country, as: 'country' }],
		})

		const countryManufacturers = manufacturers.reduce((acc, man) => {
			const index = acc.findIndex((el) => el.country === man.country?.name)

			if (index === -1) {
				const newItem = {
					country: man.country?.name,
					flag: man.country?.image,
					manufacturers: [{ ...man.toJSON() }],
				}

				acc.push(newItem)
			} else {
				acc[index].manufacturers = [...acc[index].manufacturers, { ...man.toJSON() }]
			}

			return acc
		}, [])

		return countryManufacturers
	}

	async getSelectedManufacturer(alias: string) {
		const manufacturer = await this.manufacturerRepository.findOne({ where: { 'alias_ru-RU': alias } })

		// FIXME: need norm handler
		return manufacturer
	}
}
