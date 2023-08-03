import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface NewsCreationAttrs {
	email: string
	password: string
}

@Table({ tableName: 'news' })
export class News extends Model<News, NewsCreationAttrs> {
	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number

	@ApiProperty({ example: 'Где купить сейф.', description: 'Заголовок' })
	@Column({ type: DataType.STRING, allowNull: false })
	title: string

	@ApiProperty({ example: '177-gde-kupit-safe', description: 'alias' })
	@Column({ type: DataType.STRING, allowNull: false })
	alias: string

	@ApiProperty({ example: '2023-08-31 17:31:41', description: 'Время создания' })
	@Column({ type: DataType.STRING, allowNull: false })
	createdAt: string

	@ApiProperty({ example: '2023-08-31 17:31:41', description: 'Время обновления' })
	@Column({ type: DataType.STRING, allowNull: false })
	updatedAt: string

	@ApiProperty({ example: 'купить сейф в Москве', description: 'keywords' })
	@Column({ type: DataType.STRING, allowNull: false })
	metakey: string

	@ApiProperty({ example: 'Наш интернет магазин предлагает...', description: 'description' })
	@Column({ type: DataType.STRING, allowNull: false })
	metadesc: string

	@ApiProperty({ example: 'Наш интернет магазин предлагает...', description: 'Превью статьи' })
	@Column({ type: DataType.STRING, allowNull: false })
	previewText: string
}
