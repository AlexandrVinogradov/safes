import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface ContentCreationAttrs {
	email: string
	password: string
}

@Table({ tableName: 'content' })
export class Content extends Model<Content, ContentCreationAttrs> {
	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number

	@ApiProperty({ example: 'Доставка и оплата', description: 'Заголовок' })
	@Column({ type: DataType.STRING })
	title: string

	@ApiProperty({ example: 'доставка', description: 'alias' })
	@Column({ type: DataType.STRING })
	alias: string

	@ApiProperty({ example: '<h1><span>Доставка и ', description: 'html' })
	@Column({ type: DataType.STRING })
	introtext: string

	@ApiProperty({ example: ' ', description: 'хз' })
	@Column({ type: DataType.STRING })
	fulltext: string

	@ApiProperty({ example: 'доставка сейфов, сейф', description: 'meta key' })
	@Column({ type: DataType.STRING })
	metakey: string

	@ApiProperty({ example: 'Доставка сейфов от компании Проммет', description: 'meta desc' })
	@Column({ type: DataType.STRING })
	metadesc: string
}
