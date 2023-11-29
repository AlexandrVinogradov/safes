import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
	@ApiProperty({ example: 'login', description: 'login' })
	login: string

	@ApiProperty({ example: 'JFAK123C$#kdaRR-', description: 'Пароль' })
	password: string
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
