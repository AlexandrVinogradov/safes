import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateContentDto, UpdateContentDto } from './dto/create-content.dto'
import { Content } from './content.model'

@Injectable()
export class ContentService {
	constructor(@InjectModel(Content) private contentRepository: typeof Content) {}

	async createContent(dto: CreateContentDto) {
		const content = await this.contentRepository.create(dto)
		return content
	}

	async updateContent(alias: string, contentDto: UpdateContentDto) {
		const updatedContent = await this.contentRepository.findOne({ where: { alias } })

		if (!updatedContent) throw new Error(`Контент не найден c alias: ${alias} не найден в базе данных`)

		await this.contentRepository.update(contentDto, { where: { alias } })

		return {
			status: 200,
			data: updatedContent,
			message: `Контент ${updatedContent.title} успешно обновлен`,
		}
	}

	async getAllContent() {
		const content = await this.contentRepository.findAll()
		return content
	}

	async getSelectedContent(alias: string) {
		const content = await this.contentRepository.findOne({ where: { alias } })
		return content
	}
}
