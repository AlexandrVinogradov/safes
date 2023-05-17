import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateProductImageDto } from './dto/create-productImage.dto'
import { ProductImage } from './productImages.model'
import { ProductImagesService } from './productImages.service'

@ApiTags('Product Images')
@Controller('productImages')
export class ProductImagesController {
	constructor(private safeService: ProductImagesService) {}

	@ApiOperation({ summary: 'Создание img' })
	@ApiResponse({ status: 200, type: ProductImage })
	@Post()
	create(@Body() safeDto: CreateProductImageDto) {
		return this.safeService.createProductImage(safeDto)
	}

	@ApiOperation({ summary: 'Получить все img' })
	@ApiResponse({ status: 200, type: [ProductImage] })
	@Get()
	getAll() {
		return this.safeService.getAllProductImages()
	}
}
