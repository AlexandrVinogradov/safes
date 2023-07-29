import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateContentDto } from './dto/create-content.dto'
import { Content } from './content.model'
import { ContentService } from './content.service'

@ApiTags('Контент')
@Controller('content')
export class ContentController {
	constructor(private contentService: ContentService) {}

	@ApiOperation({ summary: 'Создание пользователя' })
	@ApiResponse({ status: 200, type: Content })
	@Post()
	create(@Body() contentDto: CreateContentDto) {
		return this.contentService.createContent(contentDto)
	}

	@ApiOperation({ summary: 'Получить весь контент' })
	@ApiResponse({ status: 200, type: [Content] })
	@Get()
	getAll() {
		return this.contentService.getAllContent()
	}

	@ApiOperation({ summary: 'Получить выбранный контент' })
	@ApiResponse({ status: 200, type: [Content] })
	@Get(':id')
	getSelected(@Param('id') alias: string) {
		return this.contentService.getSelectedContent(alias)
	}
}
