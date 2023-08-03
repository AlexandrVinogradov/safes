import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateNewsDto } from './dto/create-news.dto'
import { News } from './news.model'
import { NewsService } from './news.service'

@ApiTags('Статьи')
@Controller('news')
export class NewsController {
	constructor(private newsService: NewsService) {}

	@ApiOperation({ summary: 'Создание инструкции' })
	@ApiResponse({ status: 200, type: News })
	@Post()
	create(@Body() newsDto: CreateNewsDto) {
		return this.newsService.createNews(newsDto)
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
