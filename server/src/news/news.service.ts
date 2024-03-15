import { Injectable, NotFoundException } from '@nestjs/common'
import * as fs from 'fs'
import { InjectModel } from '@nestjs/sequelize'
import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto'
import { News } from './news.model'

@Injectable()
export class NewsService {
	constructor(@InjectModel(News) private newsRepository: typeof News) {}

	async createNews(dto: CreateNewsDto, imageNames: string[]) {
		const news = await this.newsRepository.create({ ...dto, image: imageNames?.[0] || null })

		return {
			status: 200,
			data: news,
			message: `Статья ${news.title} успешно создана`,
		}
	}

	async updateNews(id: number, dto: UpdateNewsDto, imageNames: string[]) {
		const news = await this.newsRepository.findByPk(id)

		await this.newsRepository.update({ ...dto, image: imageNames?.[0] || null }, { where: { id } })

		if (!news) throw new NotFoundException(`Статья с id: ${id} не найден в базе данных`)

		if (news.image) {
			const imagePath = `${process.env.FILES_PATH}/${process.env.NEWS_FILES_PATH}/${news.image}`

			if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
		}

		return {
			status: 200,
			data: news,
			message: `Статья: ${news.title} успешно обновлена`,
		}
	}

	async deleteNews(id: number) {
		const deletedNews = await this.newsRepository.findByPk(id)

		if (!deletedNews) throw new NotFoundException(`Статья с id: ${id} не найден в базе данных`)

		if (deletedNews.image) {
			const imagePath = `${process.env.FILES_PATH}/img_news/${deletedNews.image}`

			if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
		}

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
