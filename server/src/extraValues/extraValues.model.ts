import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'

interface ExtraValueCreationAttrs {
	// product_id: number
	product_ean: string
}

@Table({ tableName: 'extra_field_values', timestamps: false })
export class ExtraValue extends Model<ExtraValue, ExtraValueCreationAttrs> {
	@ApiProperty({ example: 675, description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number

	@ApiProperty({ example: 12, description: 'ID поля' })
	@Column({ type: DataType.INTEGER })
	field_id: number

	@ApiProperty({ example: '1 класс/ключевой', description: 'значение extra_field' })
	@Column({ type: DataType.STRING })
	'name_ru-RU': string
}