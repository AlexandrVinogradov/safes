import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import * as fs from 'fs'
import { CreateManufacturerDto, UpdateManufacturerDto } from './dto/create-manufacturer.dto'
import { Country, Manufacturer } from './manufacturers.model'
import { MANUFACTURERS_FILES_PATH } from 'src/utils/constants'

@Injectable()
export class ManufacturersService {
	constructor(
		@InjectModel(Manufacturer) private manufacturerRepository: typeof Manufacturer,
		@InjectModel(Country) private manufacturerCountryRepository: typeof Country,
	) {}

	async createManufacturer(dto: CreateManufacturerDto, imageNames: string[]) {
		const manufacturer = await this.manufacturerRepository.create({ ...dto, manufacturer_logo: imageNames?.[0] || null })

		return {
			status: 200,
			data: manufacturer,
			message: `Производитель ${manufacturer['name_ru-RU']} успешно создан`,
		}
	}

	async updateManufacturer(id: number, dto: UpdateManufacturerDto, imageNames: string[]) {
		const manufacturer = await this.manufacturerRepository.findByPk(id)

		await this.manufacturerRepository.update({ ...dto, manufacturer_logo: imageNames?.[0] || null }, { where: { manufacturer_id: id } })

		if (!manufacturer) throw new NotFoundException(`Производитель с id: ${id} не найден в базе данных`)

		if (manufacturer.manufacturer_logo) {
			const imagePath = `${process.env.FILES_PATH}${MANUFACTURERS_FILES_PATH}/${manufacturer.manufacturer_logo}`

			if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
		}

		return {
			status: 200,
			data: manufacturer,
			message: `Производитель: ${manufacturer['name_ru-RU']} успешно обновлен`,
		}
	}

	async updateManufacturerPublish(id: number, isPublish: boolean) {
		const manufacturer = await this.manufacturerRepository.findByPk(id)

		await this.manufacturerRepository.update({ manufacturer_publish: isPublish }, { where: { manufacturer_id: id } })

		if (!manufacturer) throw new NotFoundException(`Производитель с id: ${id} не найден в базе данных`)

		return {
			status: 200,
			data: manufacturer,
			message: `Публикация: ${manufacturer['name_ru-RU']} успешно обновлена`,
		}
	}

	async deleteManufacturer(id: number) {
		const deletedManufacturer = await this.manufacturerRepository.findByPk(id)

		if (!deletedManufacturer) throw new NotFoundException(`Производитель с id: ${id} не найден в базе данных`)

		if (deletedManufacturer.manufacturer_logo) {
			const imagePath = `${process.env.FILES_PATH}${MANUFACTURERS_FILES_PATH}/${deletedManufacturer.manufacturer_logo}`

			if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
		}

		await this.manufacturerRepository.destroy({ where: { manufacturer_id: id } })

		return {
			status: 200,
			data: deletedManufacturer,
			message: `Производитель: ${deletedManufacturer['name_ru-RU']} успешно удален`,
		}
	}

	async getAllManufacturers(queryParams: { filter?: 'byCountry'; isPublish?: 'true' }) {
		let where = {}
		if (Boolean(queryParams.isPublish)) {
			where = {
				...where,
				manufacturer_publish: Boolean(queryParams.isPublish),
			}
		}

		const manufacturers = await this.manufacturerRepository.findAll({
			include: [{ model: Country, as: 'country' }],
			where,
		})

		const getManufacturerByCountry = () => {
			return manufacturers.reduce((acc, man) => {
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
		}

		if (queryParams.filter === 'byCountry') return getManufacturerByCountry()
		return manufacturers
	}

	async getAllSimpleListManufacturers() {
		const manufacturer = await this.manufacturerRepository.findAll({
			attributes: ['name_ru-RU', 'manufacturer_id'],
		})

		return manufacturer
	}

	async getAllManufacturersCountries() {
		const manufacturerCountry = await this.manufacturerCountryRepository.findAll()

		return manufacturerCountry
	}

	async getSelectedManufacturer(alias: string) {
		const manufacturer = await this.manufacturerRepository.findOne({ where: { 'alias_ru-RU': alias } })

		if (!manufacturer) throw new NotFoundException(`Производитель с alias: ${alias} не найден в базе данных`)

		return manufacturer
	}
}
