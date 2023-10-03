import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { NewsController } from './news.controller'
import { News } from './news.model'
import { NewsService } from './news.service'
import { FilesService } from 'src/files/files.service'

@Module({
	controllers: [NewsController],
	providers: [NewsService, FilesService],
	imports: [SequelizeModule.forFeature([News])],
})
export class NewsModule {}
