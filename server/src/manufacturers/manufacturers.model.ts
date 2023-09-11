import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Safe } from 'src/safes/safes.model'

interface ManufacturerCreationAttrs {
	// product_id: number
	product_ean: string
}

@Table({ tableName: 'manufacturers', timestamps: false })
export class Manufacturer extends Model<Manufacturer, ManufacturerCreationAttrs> {
	@ApiProperty({ example: 675, description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	manufacturer_id: number

	@ApiProperty({ example: 'valberg_logo3.jpg', description: 'лого' })
	@Column({ type: DataType.STRING, allowNull: true })
	manufacturer_logo: string

	@ApiProperty({ example: '1', description: 'хз' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	ordering: number

	@ApiProperty({ example: 'Сейфы VALBERG (Россия)', description: 'имя' })
	@Column({ type: DataType.STRING, allowNull: true })
	'name_ru-RU': string

	@ApiProperty({ example: 'safe-valberg', description: 'хз' })
	@Column({ type: DataType.STRING, allowNull: true })
	'alias_ru-RU': string

	@ApiProperty({ example: 'Промет (Россия)', description: 'короткое описание' })
	@Column({ type: DataType.STRING, allowNull: true })
	'short_description_ru-RU': string

	@ApiProperty({
		example: '<p>VALBERG — самый продаваемый бренд на Российском рынке систем безопасности. Можно...',
		description: 'описание с тегами',
	})
	@Column({ type: DataType.TEXT, allowNull: true })
	'description_ru-RU': string

	@ApiProperty({ example: 'Сейфы Valberg — купить сейф Valberg в Москве', description: 'хз' })
	@Column({ type: DataType.STRING, allowNull: true })
	'meta_title_ru-RU': string

	@ApiProperty({
		example:
			'Продажа сейфов Valberg с доставкой по Москве и в любую точку России. Огромный выбор сейфов Valberg различного назначения, покупая продукцию Valberg вы обеспечиваете сохранность на долгие годы.',
		description: 'хз',
	})
	@Column({ type: DataType.STRING, allowNull: true })
	'meta_description_ru-RU': string

	@ApiProperty({ example: 'Сейфы Valberg', description: 'хз' })
	@Column({ type: DataType.STRING, allowNull: true })
	'meta_keyword_ru-RU': string

	@HasMany(() => Safe)
    safe: Safe[]
}