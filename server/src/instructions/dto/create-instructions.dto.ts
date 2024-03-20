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
	@ApiProperty({ example: '160', description: 'Id категории' })
	@IsString()
	readonly  instructions_category_id: number

	@ApiProperty({ example: 'Инструкция по эксплуатации...', description: 'Имя' })
	@IsString()
	readonly  name: string
}
export class UpdateInstructionDto extends PartialType(CreateInstructionDto) {}

