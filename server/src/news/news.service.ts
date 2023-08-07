import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateNewsDto } from './dto/create-news.dto'
import { News } from './news.model'
import { UpdateNewsDto } from './dto/update-news.dto'

@Injectable()
export class NewsService {
	constructor(@InjectModel(News) private newsRepository: typeof News) {}

	async createNews(dto: CreateNewsDto) {
		const news = await this.newsRepository.create(dto)
		return news
	}

	async updateNews(alias: string, newsDto: UpdateNewsDto) {
		const news = await this.newsRepository.findOne({ where: { alias } })
		if (!news) {
			throw new Error('Статья не найдена')
		}

		return this.newsRepository.update(newsDto, { where: { alias } })
	}

	async getAllNews() {
		const news = await this.newsRepository.findAll()

		return news
	}

	async getSelectedNews(alias: string) {
		return await this.newsRepository.findOne({ where: { alias } })
	}
}
