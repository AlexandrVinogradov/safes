import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateExtraValueDto } from './dto/create-extraValues.dto'
import { ExtraValue } from './extraValues.model'
import { ExtraValuesService } from './extraValues.service'

@ApiTags('Extra values')
@Controller('extraValue')
export class ExtraValuesController {
	constructor(private extraValueService: ExtraValuesService) {}

	@ApiOperation({ summary: 'Создание Extra value' })
	@ApiResponse({ status: 200, type: ExtraValue })
	@Post()
	create(@Body() extraValueDto: CreateExtraValueDto) {
		return this.extraValueService.createExtraValue(extraValueDto)
	}

	@ApiOperation({ summary: 'Получить все Extra value' })
	@ApiResponse({ status: 200, type: [ExtraValue] })
	@Get()
	getAll() {
		return this.extraValueService.getAllExtraValues()
	}
}
