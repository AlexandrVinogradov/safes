import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateSafeDto } from './dto/create-safe.dto'
import { Safe } from './safes.model'
import { SafesService } from './safes.service'
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard'
import { FileInterceptor } from '@nestjs/platform-express'
import { SharpPipe } from 'src/pipes/sharpPipe'

@ApiTags('Сейфы')
@Controller('safes')
export class SafesController {
	constructor(private safeService: SafesService) {}

	@ApiOperation({ summary: 'Создание Сейфа' })
	@ApiResponse({ status: 200, type: Safe })
	@UseGuards(JwtGuard)
	@Post()
	@UseInterceptors(FileInterceptor('image'))
	create(@Body() safeDto: CreateSafeDto, @UploadedFile(new SharpPipe('/safes')) imageName: string) {
		return this.safeService.createSafe(safeDto, imageName)
	}

	@ApiOperation({ summary: 'Переключение isPublish' })
	@ApiResponse({ status: 200, type: Safe })
	@UseGuards(JwtGuard)
	@Patch('publish/:id')
	updatePublish(@Param('id') id: number, @Body() { isPublish }: { isPublish: boolean }) {
		return this.safeService.updateSafePublish(id, isPublish)
	}

	@ApiOperation({ summary: 'Удалить сейф' })
	@ApiResponse({ status: 200, type: Safe })
	@UseGuards(JwtGuard)
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.safeService.deleteSafe(id)
	}

	@ApiOperation({ summary: 'Получить все сейфы' })
	@ApiResponse({ status: 200, type: [Safe] })
	@Get()
	getAll(@Query() queryParams) {
		return this.safeService.getAllSafes(queryParams)
	}

	@ApiOperation({ summary: 'Получить выбранный сейф' })
	@ApiResponse({ status: 200, type: Safe })
	@Get('selected')
	getSelected(@Query() queryParams) {
		return this.safeService.getSelectedSafe(queryParams)
	}
}
