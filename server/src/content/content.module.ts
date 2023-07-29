import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ContentController } from './content.controller'
import { Content } from './content.model'
import { ContentService } from './content.service'

@Module({
	controllers: [ContentController],
	providers: [ContentService],
	imports: [SequelizeModule.forFeature([Content])],
})
export class ContentModule {}
