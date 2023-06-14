import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { CategoriesController } from 'src/categories/categories.controller'
import { Category } from 'src/categories/categories.model'
import { CategoriesService } from 'src/categories/categories.service'
import { SafesController } from './safes.controller'
import { Safe } from './safes.model'
import { SafesService } from './safes.service'

@Module({
	// FIXME: зачем CategoriesController?
	controllers: [SafesController, CategoriesController],
	providers: [SafesService, CategoriesService],
	imports: [SequelizeModule.forFeature([Safe]), SequelizeModule.forFeature([Category])],
})
export class SafesModule {}
