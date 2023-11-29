import { ApiProperty } from '@nestjs/swagger'
import { BeforeCreate, Column, DataType, Model, Table } from 'sequelize-typescript'
import * as bcrypt from 'bcrypt'

interface UserCreationAttrs {
	id: number
	login: string
	password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number

	@ApiProperty({ example: 'mail@mail.com', description: 'Почтовый адрес' })
	@Column({ type: DataType.STRING, allowNull: false })
	login: string

	@ApiProperty({ example: '123', description: 'Пароль' })
	@Column({ type: DataType.STRING(255), allowNull: false })
	password: string

	@BeforeCreate
	static async hashPassword(instance: User) {
		instance.password = await bcrypt.hash(instance.password, 10)
	}
}
