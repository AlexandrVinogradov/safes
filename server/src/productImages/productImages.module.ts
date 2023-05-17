import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ProductImagesController } from './productImages.controller'
import { ProductImage } from './productImages.model'
import { ProductImagesService } from './productImages.service'

@Module({
	controllers: [ProductImagesController],
	providers: [ProductImagesService],
	imports: [SequelizeModule.forFeature([ProductImage])],
})
export class ProductImagesModule {}
