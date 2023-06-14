import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateCategoryDto } from './dto/create-category.dto'
import { Category } from './categories.model'
import { CategoriesService } from './categories.service'

@ApiTags('Категории')
@Controller('categories')
export class CategoriesController {
	constructor(private categoryService: CategoriesService) {}

	@ApiOperation({ summary: 'Создание пользователя' })
	@ApiResponse({ status: 200, type: Category })
	@Post()
	create(@Body() categoryDto: CreateCategoryDto) {
		return this.categoryService.createCategory(categoryDto)
	}

	// @ApiOperation({ summary: 'Получить всех пользователей' })
	// @ApiResponse({ status: 200, type: [Category] })
	// @Get()
	// getAll() {
	// 	return this.categoryService.getAllCategories()
	// }

	@ApiOperation({ summary: 'Получить структуру' })
	@ApiResponse({ status: 200, type: [Category] })
	@Get()
	getCategory() {
		return this.categoryService.getAllCategories()
	}
}
