import { ApiProperty } from '@nestjs/swagger'

export class CreateOrderDto {
	@ApiProperty({ example: 'mail@mail.com', description: 'Почтовый адрес' })
	readonly email: string
	@ApiProperty({ example: '123', description: 'Пароль' })
	readonly password: string
}
