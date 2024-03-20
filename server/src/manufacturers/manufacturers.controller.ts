import { Body, Controller, Get, Post, Param, Query, UseGuards, UseInterceptors, UploadedFile, Patch, Delete } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateManufacturerDto, UpdateManufacturerDto } from './dto/create-manufacturer.dto'
import { Country, Manufacturer } from './manufacturers.model'
import { ManufacturersService } from './manufacturers.service'
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard'
import { FileInterceptor } from '@nestjs/platform-express'
import { SharpPipe } from 'src/pipes/sharpPipe'
import { MANUFACTURERS_FILES_PATH } from 'src/utils/constants'

@ApiTags('Производители')
@Controller('manufacturers')
export class ManufacturersController {
	constructor(private manufacturerService: ManufacturersService) {}

	@ApiOperation({ summary: 'Создание производителя' })
	@ApiResponse({ status: 200, type: Manufacturer })
	@UseGuards(JwtGuard)
	@Post()
	@UseInterceptors(FileInterceptor('image'))
	create(@Body() manufacturersDto: CreateManufacturerDto, @UploadedFile(new SharpPipe(MANUFACTURERS_FILES_PATH)) imageNames: string[]) {
		return this.manufacturerService.createManufacturer(manufacturersDto, imageNames)
	}

	@ApiOperation({ summary: 'Обновить производителя' })
	@ApiResponse({ status: 200, type: Manufacturer })
	@UseGuards(JwtGuard)
	@Patch(':id')
	@UseInterceptors(FileInterceptor('image'))
	async update(
		@Param('id') id: number,
		@Body() manufacturersDto: UpdateManufacturerDto,
		@UploadedFile(new SharpPipe(MANUFACTURERS_FILES_PATH)) imageNames: string[],
	) {
		return this.manufacturerService.updateManufacturer(id, manufacturersDto, imageNames)
	}

	@ApiOperation({ summary: 'Переключение isPublish' })
	@ApiResponse({ status: 200, type: Manufacturer })
	@UseGuards(JwtGuard)
	@Patch('publish/:id')
	updatePublish(@Param('id') id: number, @Body() { isPublish }: { isPublish: boolean }) {
		return this.manufacturerService.updateManufacturerPublish(id, isPublish)
	}

	@ApiOperation({ summary: 'Удалить производителя' })
	@ApiResponse({ status: 200, type: Manufacturer })
	@UseGuards(JwtGuard)
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.manufacturerService.deleteManufacturer(id)
	}

	@ApiOperation({ summary: 'Получить всех производителей' })
	@ApiResponse({ status: 200, type: [Manufacturer] })
	@Get()
	getAll(@Query() queryParams) {
		return this.manufacturerService.getAllManufacturers(queryParams)
	}

	@ApiOperation({ summary: 'Получить простой список всех производителей' })
	@ApiResponse({ status: 200, type: [Manufacturer] })
	@Get('/simple')
	getAllSimpleList() {
		return this.manufacturerService.getAllSimpleListManufacturers()
	}

	@ApiOperation({ summary: 'Получить все страны производителей' })
	@ApiResponse({ status: 200, type: [Country] })
	@Get('/countries')
	getAllManufacturersCountries() {
		return this.manufacturerService.getAllManufacturersCountries()
	}

	@ApiOperation({ summary: 'Получить выбранного производителя' })
	@ApiResponse({ status: 200, type: [Manufacturer] })
	@Get(':id')
	getSelected(@Param('id') alias: string) {
		return this.manufacturerService.getSelectedManufacturer(alias)
	}
}
