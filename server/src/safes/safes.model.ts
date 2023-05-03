import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface SafeCreationAttrs {
	// product_id: number
	product_ean: string
}

@Table({ tableName: '2', timestamps: false })
export class Safe extends Model<Safe, SafeCreationAttrs> {
	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	product_id: number

	@ApiProperty({ example: '123', description: 'код' })
	@Column({ type: DataType.STRING, unique: true, allowNull: true })
	product_ean: string

	// @ApiProperty({example: '123', description: 'Пароль'})
	// @Column({ type: DataType.STRING, allowNull: false })
	// password: string

	// @ApiProperty({example: 'true', description: 'Забанен или нет'})
	// @Column({ type: DataType.BOOLEAN, defaultValue: false })
	// banned: boolean

	// @ApiProperty({example: 'За подозрительную активность', description: 'Причина бана'})
	// @Column({ type: DataType.STRING, allowNull: true })
	// banReason: string
}
