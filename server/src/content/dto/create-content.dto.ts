import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateContentDto {
	@ApiProperty({ example: 'Доставка и оплата', description: 'Заголовок' })
	@IsString()
	readonly title: string

	@ApiProperty({ example: '<h1><span>Доставка и ', description: 'html' })
	@IsString()
	readonly introtext: string

	@ApiProperty({ example: ' ', description: 'хз' })
	@IsString()
	readonly fulltext: string

	@ApiProperty({ example: 'доставка сейфов, сейф', description: 'meta key' })
	@IsString()
	readonly metakey: string
	
	@ApiProperty({ example: 'Доставка сейфов от компании Проммет', description: 'meta desc' })
	@IsString()
	readonly metadesc: string
}

export class UpdateContentDto extends PartialType(CreateContentDto) {}
