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

	@ApiProperty({ example: 'купить сейф в Москве', description: 'keywords' })
	@Column({ type: DataType.STRING, allowNull: false })
	metakey: string

	@ApiProperty({ example: 'Наш интернет магазин предлагает...', description: 'description' })
	@Column({ type: DataType.STRING, allowNull: false })
	metadesc: string

	@ApiProperty({ example: '<p>Мы рады видеть...', description: 'Html статьи' })
	@Column({ type: DataType.STRING, allowNull: false })
	fullHtml: string

	@ApiProperty({ example: '<p>Мы рады видеть...', description: 'Html preview' })
	@Column({ type: DataType.STRING, allowNull: false })
	previewHtml: string

	@ApiProperty({ example: '13.06.2022', description: 'Дата создания статьи' })
	@Column({ type: DataType.STRING, allowNull: false })
	fakeDate: string

	@ApiProperty({ example: 'test.jpg', description: 'Картинка' })
	@Column({ type: DataType.STRING, allowNull: false })
	image: string
}
