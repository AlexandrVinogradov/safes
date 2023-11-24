import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { OrderController } from './order.controller'
import { Orders } from './order.model'
import { OrderService } from './order.service'

@Module({
	controllers: [OrderController],
	providers: [OrderService],
	imports: [SequelizeModule.forFeature([Orders])],
})
export class OrderModule {}
