import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto'
import { News } from './news.model'
import { NewsService } from './news.service'
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard'
import { FileInterceptor } from '@nestjs/platform-express'
import { SharpPipe } from 'src/pipes/sharpPipe'

@ApiTags('Статьи')
@Controller('news')
export class NewsController {
	constructor(private newsService: NewsService) {}

	@ApiOperation({ summary: 'Создание Статьи' })
	@ApiResponse({ status: 200, type: News })
	@UseGuards(JwtGuard)
	@Post()
	@UseInterceptors(FileInterceptor('image'))
	create(@Body() newsDto: CreateNewsDto, @UploadedFile(new SharpPipe('/news')) imageName: string) {
		return this.newsService.createNews(newsDto, imageName)
	}

	@ApiOperation({ summary: 'Обновить статью' })
	@ApiResponse({ status: 200, type: News })
	@UseGuards(JwtGuard)
	@Patch(':id')
	@UseInterceptors(FileInterceptor('image'))
	async update(@Param('id') id: number, @Body() news: UpdateNewsDto, @UploadedFile(new SharpPipe('/news')) imageName: string) {
		return this.newsService.updateNews(id, news, imageName)
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
