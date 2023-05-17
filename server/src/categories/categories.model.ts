import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface CategoryCreationAttrs {
	email: string
	password: string
}

@Table({ tableName: 'categories', timestamps: false })
export class Category extends Model<Category, CategoryCreationAttrs> {
	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	category_id: number

	@ApiProperty({ example: 'img1313.jpg', description: 'img' })
	@Column({ type: DataType.STRING })
	category_image: string

	@ApiProperty({ example: '1', description: 'хз' })
	@Column({ type: DataType.INTEGER })
	category_parent_id: number

	@ApiProperty({ example: '2017-02-26 12:34:17', description: 'дата добавления' })
	@Column({ type: DataType.STRING })
	category_add_date: string

	@ApiProperty({ example: 'Взломостойкие сейфы 1 класса', description: 'имя' })
	@Column({ type: DataType.STRING })
	'name_ru-RU': string

	@ApiProperty({ example: 'vzlomostoikie-1class', description: 'хз' })
	@Column({ type: DataType.STRING })
	'alias_ru-RU': string

	@ApiProperty({ example: 'Valberg', description: 'хз' })
	@Column({ type: DataType.STRING })
	'short_description_ru-RU': string

	@ApiProperty({
		example: '<p style=text-align: justify;>Если вы затрудняетесь с выбором взломостойкого сейфа 1-го класса, ...',
		description: 'Описание',
	})
	@Column({ type: DataType.STRING })
	'description_ru-RU': string

	@ApiProperty({ example: 'Взломостойкие сейфы 1 класса купить в Москве', description: 'хз' })
	@Column({ type: DataType.STRING })
	'meta_title_ru-RU': string

	@ApiProperty({
		example:
			'Продажа сейфов 1 класса взломостойкости, большой выбор взломостойких сейфов 1 класса всех размеров и производителей. Осуществляем доставку по Москве в течении дня.',
		description: 'хз',
	})
	@Column({ type: DataType.STRING })
	'meta_description_ru-RU': string

	@ApiProperty({ example: 'Взломостойкие сейфы 1 класса', description: 'хз' })
	@Column({ type: DataType.STRING })
	'meta_keyword_ru-RU': string
}
