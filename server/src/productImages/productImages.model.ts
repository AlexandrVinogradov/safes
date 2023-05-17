import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript'
import { Safe } from 'src/safes/safes.model'

interface ProductImageCreationAttrs {
	// product_id: number
	product_ean: string
}

@Table({ tableName: 'product_images', timestamps: false })
export class ProductImage extends Model<ProductImage, ProductImageCreationAttrs> {
	@ApiProperty({ example: 675, description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	image_id: number

	@ApiProperty({ example: '1', description: 'id  продукта' })
	@Column({ type: DataType.INTEGER })
	product_id: number

	@ApiProperty({ example: '1497444179close_full7777772.jpg', description: 'имя' })
	@Column({ type: DataType.STRING })
	image_name: string

	@ApiProperty({ example: '1', description: 'последовательность' })
	@Column({ type: DataType.INTEGER })
	ordering: number

	// @HasMany(() => Safe)
    // safe: Safe[]
}
