import { Body, Controller, Get, Post } from '@nestjs/common'
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

	@ApiOperation({ summary: 'Получить всех пользователей' })
	@ApiResponse({ status: 200, type: [Content] })
	@Get()
	getAll() {
		return this.contentService.getAllContent()
	}
}
