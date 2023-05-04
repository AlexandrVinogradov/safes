import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateSafeDto } from './dto/create-safe.dto'
import { Safe } from './safes.model'
import { SafesService } from './safes.service'

@ApiTags('Сейфы')
@Controller('safes')
export class SafesController {
	// must be light 
	constructor(private safeService: SafesService) {}

	@ApiOperation({ summary: 'Создание сейфа' })
	@ApiResponse({ status: 200, type: Safe })
	@Post()
	create(@Body() safeDto: CreateSafeDto) {
		return this.safeService.createSafe(safeDto)
	}

	@ApiOperation({ summary: 'Получить все сейфы' })
	@ApiResponse({ status: 200, type: [Safe] })
	@Get()
	getAll() {
		return this.safeService.getAllSafes()
	}
}
