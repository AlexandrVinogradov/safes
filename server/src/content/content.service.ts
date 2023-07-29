import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateContentDto } from './dto/create-content.dto'
import { Content } from './content.model'

@Injectable()
export class ContentService {
	constructor(@InjectModel(Content) private contentRepository: typeof Content) {}

	async createContent(dto: CreateContentDto) {
		const content = await this.contentRepository.create(dto)
		return content
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
