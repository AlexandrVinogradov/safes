import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ManufacturersController } from './manufacturers.controller'
import { Manufacturer } from './manufacturers.model'
import { ManufacturersService } from './manufacturers.service'

@Module({
	controllers: [ManufacturersController],
	providers: [ManufacturersService],
	imports: [SequelizeModule.forFeature([Manufacturer])],
})
export class ManufacturersModule {}
