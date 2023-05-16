import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ExtraValuesController } from './extraValues.controller'
import { ExtraValue } from './extraValues.model'
import { ExtraValuesService } from './extraValues.service'

@Module({
	controllers: [ExtraValuesController],
	providers: [ExtraValuesService],
	imports: [SequelizeModule.forFeature([ExtraValue])],
})
export class ExtraValuesModule {}
