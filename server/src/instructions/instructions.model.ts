import { ApiProperty } from '@nestjs/swagger'
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { InstructionCategories } from './instruction_categories.model'

interface InstructionCreationAttrs {
	email: string
	password: string
	image: string
	link: string
}

@Table({ tableName: 'instructions', timestamps: false })
export class Instruction extends Model<Instruction, InstructionCreationAttrs> {
	@ApiProperty({ example: '1', description: 'Идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number

	@ApiProperty({ example: '1', description: 'Идентификатор категории' })
	@ForeignKey(() => InstructionCategories)
	@Column({ type: DataType.INTEGER })
	instructions_category_id: number

	@ApiProperty({ example: 'ManufacturerTYPE', description: 'id производителя' })
	@BelongsTo(() => InstructionCategories)
	instructionCategory: InstructionCategories

	@ApiProperty({ example: 'Инструкция по эксплуатации электронного кодового замка', description: 'Имя' })
	@Column({ type: DataType.STRING, allowNull: false })
	name: string

	@ApiProperty({ example: 'tehnomaks-EL-MEBEL.pdf', description: 'Ссылка' })
	@Column({ type: DataType.STRING, allowNull: false })
	link: string

	@ApiProperty({ example: '102.png', description: 'Картинка замка' })
	@Column({ type: DataType.STRING })
	image: string
}
