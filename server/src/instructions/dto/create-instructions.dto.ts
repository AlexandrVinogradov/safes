import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsString, IsNumber } from 'class-validator'

export class CreateInstructionCategoryDto {
	@ApiProperty({ example: 'Инструкции к сейфам JUWEL', description: 'Заголовок' })
	@IsString()
	readonly title: string

	@ApiProperty({ example: '167-instructions-safe-juwel', description: 'Alias' })
	@IsString()
	readonly alias: string

	@ApiProperty({ example: 'инструкции к сейфам TECHNOMAX', description: 'metakey' })
	@IsString()
	readonly metakey: string

	@ApiProperty({ example: 'Скачать инструкции к сейфам TECHNOMAX от компании ПромметсейфL', description: 'metadesc' })
	@IsString()
	readonly metadesc: string
}
export class UpdateInstructionCategoryDto extends PartialType(CreateInstructionCategoryDto) {}

export class CreateInstructionDto {
	@ApiProperty({ example: 'mail@mail.com', description: 'Почтовый адрес' })
	readonly email: string
	@ApiProperty({ example: '123', description: 'Пароль' })
	readonly password: string
}
