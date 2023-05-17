import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Safe } from 'src/safes/safes.model'

interface ExtraValueCreationAttrs {
	// product_id: number
	product_ean: string
}

@Table({ tableName: 'extra_field_values', timestamps: false })
export class ExtraValue extends Model<ExtraValue, ExtraValueCreationAttrs> {
	@ApiProperty({ example: 675, description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number

	@ApiProperty({ example: 12, description: 'лого' })
	@Column({ type: DataType.NUMBER })
	field_id: number

	@ApiProperty({ example: '1 класс/ключевой', description: 'значение extra_field' })
	@Column({ type: DataType.STRING })
	'name_ru-RU': string

	// @HasMany(() => Safe)
	// safe: Safe[]
}