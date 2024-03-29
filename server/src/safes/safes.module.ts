import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { CategoriesController } from 'src/categories/categories.controller'
import { Category } from 'src/categories/categories.model'
import { CategoriesService } from 'src/categories/categories.service'
import { SafesController } from './safes.controller'
import { ProductToCategories, ProductsRelations, Safe } from './safes.model'
import { SafesService } from './safes.service'
import { ProductImage } from 'src/productImages/productImages.model'

@Module({
	controllers: [SafesController, CategoriesController],
	providers: [SafesService, CategoriesService],
	imports: [
		SequelizeModule.forFeature([Safe]),
		SequelizeModule.forFeature([ProductImage]),
		SequelizeModule.forFeature([ProductToCategories]),
		SequelizeModule.forFeature([Category]),
		SequelizeModule.forFeature([ProductsRelations]),
	],
})
export class SafesModule {}
