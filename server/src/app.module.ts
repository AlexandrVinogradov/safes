import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { ProductToCategories, Safe } from './safes/safes.model'
import { SafesModule } from './safes/safes.module'
import { User } from './users/users.model'
import { UsersModule } from './users/users.module'
import { Manufacturer } from './manufacturers/manufacturers.model'
import { ManufacturersModule } from './manufacturers/manufacturers.module'
import { ExtraValue } from './extraValues/extraValues.model'
import { ExtraValuesModule } from './extraValues/extraValues.module'
import { CategoriesModule } from './categories/categories.module'
import { Category } from './categories/categories.model'
import { ProductImage } from './productImages/productImages.model'
import { ProductImagesModule } from './productImages/productImages.module'
import { ContentModule } from './content/content.module'
import { InstructionsModule } from './instructions/instructions.module'
import { Content } from './content/content.model'
import { Instruction } from './instructions/instructions.model'
import { InstructionCategories } from './instructions/instruction_categories.model'
import { News } from './news/news.model'
import { NewsModule } from './news/news.module'

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV}.env`,
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			models: [User, Instruction, InstructionCategories, Content, News, Category, Safe, ProductToCategories, Manufacturer, ExtraValue, ProductImage],
			autoLoadModels: true,
		}),
		UsersModule,
		InstructionsModule,
		ContentModule,
		NewsModule,
		CategoriesModule,
		SafesModule,
		ManufacturersModule,
		ExtraValuesModule,
		ProductImagesModule,
	],
})
export class AppModule {}