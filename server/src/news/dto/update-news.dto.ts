import { ApiProperty } from '@nestjs/swagger'

export class UpdateNewsDto {
	@ApiProperty({ example: 'Доставка и оплата', description: 'Заголовок' })
	readonly title: string
	@ApiProperty({ example: ' ', description: 'хз' })
	readonly fullHtml: string
	@ApiProperty({ example: 'доставка сейфов, сейф', description: 'meta key' })
	readonly metakey: string
	@ApiProperty({ example: 'Доставка сейфов от компании Проммет', description: 'meta desc' })
	readonly metadesc: string
	@ApiProperty({ example: '13.06.2022', description: 'Дата создания статьи' })
	readonly fakeDate: string
	@ApiProperty({ example: 'test.jpg', description: 'Картинка' })
	readonly image: string
}
