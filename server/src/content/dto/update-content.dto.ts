import { ApiProperty } from '@nestjs/swagger'

export class UpdateContentDto {
	@ApiProperty({ example: 'Доставка и оплата', description: 'Заголовок' })
	readonly title: string
	@ApiProperty({ example: '<h1><span>Доставка и ', description: 'html' })
	readonly introtext: string
	@ApiProperty({ example: ' ', description: 'хз' })
	readonly fulltext: string
	@ApiProperty({ example: 'доставка сейфов, сейф', description: 'meta key' })
	readonly metakey: string
	@ApiProperty({ example: 'Доставка сейфов от компании Проммет', description: 'meta desc' })
	readonly metadesc: string
}
