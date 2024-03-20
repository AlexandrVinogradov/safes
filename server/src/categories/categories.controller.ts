import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateCategoryDto, UpdateCategoryDto } from './dto/create-category.dto'
import { Category } from './categories.model'
import { CategoriesService } from './categories.service'
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard'
import { FileInterceptor } from '@nestjs/platform-express'
import { SharpPipe } from 'src/pipes/sharpPipe'
import { CATEGORIES_FILES_PATH } from 'src/utils/constants'

@ApiTags('Категории')
@Controller('categories')
export class CategoriesController {
	constructor(private categoryService: CategoriesService) {}

	@ApiOperation({ summary: 'Создание категории' })
	@ApiResponse({ status: 200, type: Category })
	@UseGuards(JwtGuard)
	@Post()
	@UseInterceptors(FileInterceptor('image'))
	create(@Body() categoryDto: CreateCategoryDto, @UploadedFile(new SharpPipe(CATEGORIES_FILES_PATH)) imageNames: string[]) {
		return this.categoryService.createCategory(categoryDto, imageNames)
	}

	@ApiOperation({ summary: 'Обновить категорию' })
	@ApiResponse({ status: 200, type: Category })
	@UseGuards(JwtGuard)
	@Patch(':id')
	@UseInterceptors(FileInterceptor('image'))
	async update(
		@Param('id') id: number,
		@Body() categoryDto: UpdateCategoryDto,
		@UploadedFile(new SharpPipe(CATEGORIES_FILES_PATH)) imageNames: string[],
	) {
		return this.categoryService.updateCategory(id, categoryDto, imageNames)
	}

	@ApiOperation({ summary: 'Переключение isPublish' })
	@ApiResponse({ status: 200, type: Category })
	@UseGuards(JwtGuard)
	@Patch('publish/:id')
	updatePublish(@Param('id') id: number, @Body() { isPublish }: { isPublish: boolean }) {
		return this.categoryService.updateCategoryPublish(id, isPublish)
	}

	@ApiOperation({ summary: 'Удалить категорию' })
	@ApiResponse({ status: 200, type: Category })
	@UseGuards(JwtGuard)
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.categoryService.deleteCategory(id)
	}

	@ApiOperation({ summary: 'Получить все структуру категорий' })
	@ApiResponse({ status: 200, type: [Category] })
	@Get()
	getCategory(@Query() queryParams) {
		return this.categoryService.getAllCategories(queryParams)
	}

	@ApiOperation({ summary: 'Получить выбранную структуру категорий' })
	@ApiResponse({ status: 200, type: [Category] })
	@Get(':id')
	getSelectedCategory(@Param('id') id: string) {
		return this.categoryService.getSelectedCategory(id)
	}
}
