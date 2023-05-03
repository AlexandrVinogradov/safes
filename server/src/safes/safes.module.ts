import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { SafesController } from './safes.controller'
import { Safe } from './safes.model'
import { SafesService } from './safes.service'

@Module({
	controllers: [SafesController],
	providers: [SafesService],
	imports: [SequelizeModule.forFeature([Safe])],
})
export class SafesModule {}
