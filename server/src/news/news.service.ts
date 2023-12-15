import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto'
import { News } from './news.model'

@Injectable()
export class NewsService {
	constructor(@InjectModel(News) private newsRepository: typeof News) {}

	async createNews(dto: CreateNewsDto) {
		const news = await this.newsRepository.create(dto)

		return {
			status: 200,
			data: news,
			message: `Статья ${news.title} успешно создана`,
		}
	}

	async updateNews(id: number, newsDto: UpdateNewsDto) {
		const news = await this.newsRepository.findByPk(id)

		await this.newsRepository.update(newsDto, { where: { id } })

		if (!news) throw new NotFoundException(`Статья с id: ${id} не найден в базе данных`)

		return {
			status: 200,
			data: news,
			message: `Статья: ${news.title} успешно обновлена`,
		}
	}

	async deleteNews(id: number) {
		const deletedNews = await this.newsRepository.findByPk(id)

		if (!deletedNews) throw new NotFoundException(`Статья с id: ${id} не найден в базе данных`)

		await this.newsRepository.destroy({ where: { id } })

		return {
			status: 200,
			data: deletedNews,
			message: `Статья: ${deletedNews.title} успешно удалена`,
		}
	}

	async getAllNews() {
		const news = await this.newsRepository.findAll({ order: [['createdAt', 'DESC']] })

		return news
	}

	async getSelectedNews(alias: string) {
		return await this.newsRepository.findOne({ where: { alias } })
	}
}
