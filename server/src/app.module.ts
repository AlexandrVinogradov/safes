import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { Safe } from './safes/safes.model'
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
			models: [User, Safe, Manufacturer, ExtraValue, Category, ProductImage],
			autoLoadModels: true,
		}),
		UsersModule,
		SafesModule,
		ManufacturersModule,
		ExtraValuesModule,
		CategoriesModule,
		ProductImagesModule
	],
})
export class AppModule {}
