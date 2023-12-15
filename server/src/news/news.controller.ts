import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto'
import { News } from './news.model'
import { NewsService } from './news.service'
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard'

@ApiTags('Статьи')
@Controller('news')
export class NewsController {
	constructor(private newsService: NewsService) {}

	@ApiOperation({ summary: 'Создание инструкции' })
	@ApiResponse({ status: 200, type: News })
	@UseGuards(JwtGuard)
	@Post()
	create(@Body() newsDto: CreateNewsDto) {
		return this.newsService.createNews(newsDto)
	}

	@ApiOperation({ summary: 'Обновить статью' })
	@ApiResponse({ status: 200, type: News })
	@UseGuards(JwtGuard)
	@Patch(':id')
	update(@Param('id') id: number, @Body() instructionCategory: UpdateNewsDto) {
		return this.newsService.updateNews(id, instructionCategory)
	}

	@ApiOperation({ summary: 'Удалить статью' })
	@ApiResponse({ status: 200, type: News })
	@UseGuards(JwtGuard)
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.newsService.deleteNews(id)
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
