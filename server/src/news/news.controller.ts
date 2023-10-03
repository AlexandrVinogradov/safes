import { Body, Controller, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateNewsDto } from './dto/create-news.dto'
import { News } from './news.model'
import { NewsService } from './news.service'
import { UpdateNewsDto } from './dto/update-news.dto'
import { FilesService } from 'src/files/files.service'
import { multerConfig } from 'multer.config'
import { FileInterceptor } from '@nestjs/platform-express'

@ApiTags('Статьи')
@Controller('news')
export class NewsController {
	constructor(private newsService: NewsService, private readonly filesService: FilesService) {}

	@ApiOperation({ summary: 'Создание инструкции' })
	@ApiResponse({ status: 200, type: News })
	@Post()
	create(@Body() newsDto: CreateNewsDto) {
		return this.newsService.createNews(newsDto)
	}

	@ApiOperation({ summary: 'Обновить Статью' })
	@ApiResponse({ status: 200, type: News })
	@Patch(':id')
	@UseInterceptors(FileInterceptor('image', multerConfig))
	async update(@Param('id') id: string, @Body() newsDto: UpdateNewsDto, @UploadedFile() file: Express.Multer.File) {
		let imageUrl: string | null = null

		if (file) {
			imageUrl = await this.filesService.uploadFile(file)
		}

		const updatedNews = await this.newsService.updateNews(id, newsDto, imageUrl)

		return updatedNews
	}

	@ApiOperation({ summary: 'Получить вcе статьи' })
	@ApiResponse({ status: 200, type: [News] })
	@Get()
	getAllNews() {
		return this.newsService.getAllNews()
	}

	@ApiOperation({ summary: 'Получить выбранную статью' })
	@ApiResponse({ status: 200, type: [News] })
	@Get(':id')
	getSelectedNews(@Param('id') alias: string) {
		return this.newsService.getSelectedNews(alias)
	}
}
