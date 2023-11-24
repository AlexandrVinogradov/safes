import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateOrderDto } from './dto/create-order.dto'
import { Orders } from './order.model'
import { UpdateOrderDto } from './dto/update-order.dto'

@Injectable()
export class OrderService {
	constructor(@InjectModel(Orders) private orderRepository: typeof Orders) {}

	async createOrder(dto: CreateOrderDto) {
		const order = await this.orderRepository.create(dto)
		return order
	}

	async updateOrder(alias: string, orderDto: UpdateOrderDto) {
		// const order = await this.orderRepository.findOne({ where: { alias } })
		// if (!order) {
		// 	throw new Error('Заказ не найден')
		// }

		// return this.orderRepository.update(orderDto, { where: { alias } })
	}

	async getAllOrder() {
		const order = await this.orderRepository.findAll({
			order: [['updatedAt', 'DESC']]
		})
		return order
	}

	async getSelectedOrder(alias: string) {
		// const order = await this.orderRepository.findOne({ where: { alias } })
		// return order
	}
}
