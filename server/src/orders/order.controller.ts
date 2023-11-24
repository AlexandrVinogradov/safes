import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateOrderDto } from './dto/create-order.dto'
import { Orders } from './order.model'
import { OrderService } from './order.service'
import { UpdateOrderDto } from './dto/update-order.dto'

@ApiTags('Заказы')
@Controller('orders')
export class OrderController {
	constructor(private orderService: OrderService) {}

	@ApiOperation({ summary: 'Создание пользователя' })
	@ApiResponse({ status: 200, type: Orders })
	@Post()
	create(@Body() orderDto: CreateOrderDto) {
		return this.orderService.createOrder(orderDto)
	}

	@ApiOperation({ summary: 'Обновить контент' })
	@ApiResponse({ status: 200, type: Orders })
	@Patch(':id')
	update(@Param('id') alias: string, @Body() orderDto: UpdateOrderDto) {
		return this.orderService.updateOrder(alias, orderDto)
	}

	@ApiOperation({ summary: 'Получить весь контент' })
	@ApiResponse({ status: 200, type: [Orders] })
	@Get()
	getAll() {
		return this.orderService.getAllOrder()
	}

	@ApiOperation({ summary: 'Получить выбранный контент' })
	@ApiResponse({ status: 200, type: [Orders] })
	@Get(':id')
	getSelected(@Param('id') alias: string) {
		return this.orderService.getSelectedOrder(alias)
	}
}
