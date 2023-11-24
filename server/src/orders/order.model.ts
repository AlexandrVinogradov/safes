import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface OrderCreationAttrs {
	email: string
	password: string
}

@Table({ tableName: 'orders' })
export class Orders extends Model<Orders, OrderCreationAttrs> {
	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true, allowNull: false })
	order_id: number

	@ApiProperty({ example: '00000128', description: 'Номер заказа' })
	@Column({ type: DataType.STRING(50), allowNull: false, unique: true })
	order_number: string

	@ApiProperty({ example: 'Ольга', description: 'Имя заказчика' })
	@Column({ type: DataType.STRING(225), allowNull: false })
	f_name: string

	@ApiProperty({ example: 'kek@mail.com', description: 'email' })
	@Column({ type: DataType.STRING(225), allowNull: false })
	email: string

	@ApiProperty({ example: 'Тип доставки', description: '2' })
	@Column({ type: DataType.INTEGER, allowNull: false })
	shipping_method_id: number

	@ApiProperty({ example: '16990', description: 'Цена заказа' })
	@Column({ type: DataType.INTEGER, allowNull: false })
	order_total: number

	@ApiProperty({ example: 'Доставка сейфов от компании Проммет', description: 'meta desc' })
	@Column({ type: DataType.INTEGER, allowNull: false })
	order_status: number

	@ApiProperty({ example: 'Будьте добры привезти заказ либо в будний день в 20.00, либо в выходной день. Заранее спасибо', description: 'Комментарий к заказу' })
	@Column({ type: DataType.TEXT })
	order_add_info: string

	@ApiProperty({ example: 'Колотушкина 24/1', description: 'Адрес' })
	@Column({ type: DataType.STRING(100), allowNull: false })
	street: string

	@ApiProperty({ example: '89163213323', description: 'Телефон' })
	@Column({ type: DataType.STRING(24), allowNull: false })
	mobil_phone: string

	@ApiProperty({ example: 'Москва', description: 'Город' })
	@Column({ type: DataType.STRING(100) })
	d_city: string

	@ApiProperty({ example: '800', description: 'Стоимость доставки' })
	@Column({ type: DataType.INTEGER, allowNull: false })
	order_shipping: number
}
