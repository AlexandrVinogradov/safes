import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript'
import { Instruction } from './instructions.model'

interface InstructionCreationAttrs {
	email: string
	password: string
}

@Table({ tableName: 'instruction_categories' })
export class InstructionCategories extends Model<InstructionCategories, InstructionCreationAttrs> {
	// @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	// @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	// id: number

	@ApiProperty({ example: 'Инструкции к сейфам JUWEL', description: 'Имя' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	title: string

	@ApiProperty({ example: '167-instructions-safe-juwel', description: 'Alias' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	alias: string

	@ApiProperty({ example: 'инструкции к сейфам TECHNOMAX', description: 'metakey' })
	@Column({ type: DataType.STRING, allowNull: false })
	metakey: string

	@ApiProperty({ example: 'Скачать инструкции к сейфам TECHNOMAX от компании Промметсейф', description: 'metadesc' })
	@Column({ type: DataType.STRING, allowNull: false })
	metadesc: string

	@HasMany(() => Instruction)
	instructions: Instruction[]
}
