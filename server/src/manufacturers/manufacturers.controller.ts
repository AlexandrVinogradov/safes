import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateManufacturerDto } from './dto/create-manufacturer.dto'
import { Manufacturer } from './manufacturers.model'
import { ManufacturersService } from './manufacturers.service'

@ApiTags('Производители')
@Controller('manufacturers')
export class ManufacturersController {
	constructor(private manufacturerService: ManufacturersService) {}

	@ApiOperation({ summary: 'Создание производителя' })
	@ApiResponse({ status: 200, type: Manufacturer })
	@Post()
	create(@Body() manufacturerDto: CreateManufacturerDto) {
		return this.manufacturerService.createManufacturer(manufacturerDto)
	}

	@ApiOperation({ summary: 'Получить всех производителей' })
	@ApiResponse({ status: 200, type: [Manufacturer] })
	@Get()
	getAll(@Query() queryParams) {
		return this.manufacturerService.getAllManufacturers(queryParams)
	}

	@ApiOperation({ summary: 'Получить всех производителей' })
	@ApiResponse({ status: 200, type: [Manufacturer] })
	@Get('/simple')
	getAllSimpleList() {
		return this.manufacturerService.getAllSimpleListManufacturers()
	}

	@ApiOperation({ summary: 'Получить выбранного производителя' })
	@ApiResponse({ status: 200, type: [Manufacturer] })
	@Get(':id')
	getSelected(@Param('id') alias: string) {
		return this.manufacturerService.getSelectedManufacturer(alias)
	}
}
