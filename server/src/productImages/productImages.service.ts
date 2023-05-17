import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateProductImageDto } from './dto/create-productImage.dto'
import { ProductImage } from './productImages.model'

@Injectable()
export class ProductImagesService {
	constructor(@InjectModel(ProductImage) private productImageRepository: typeof ProductImage) {}

	async createProductImage(dto: CreateProductImageDto) {
		const safe = await this.productImageRepository.create(dto)
		return safe
	}

	async getAllProductImages() {
		const productImages = await this.productImageRepository.findAll()

		return productImages
	}
}
