import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateNewsDto {
	@ApiProperty({ example: 'Доставка и оплата', description: 'Заголовок' })
	@IsString()
	readonly title: string

	@ApiProperty({ example: '181-vybrat-safe', description: 'Alias' })
	@IsString()
	readonly alias: string

	@ApiProperty({ example: '<p>Мы рады видеть...', description: 'Html статьи' })
	@IsString()
	readonly fullHtml: string

	@ApiProperty({ example: '<p>Мы рады видеть...', description: 'Html preview' })
	@IsString()
	readonly previewHtml: string

	@ApiProperty({ example: 'доставка сейфов, сейф', description: 'meta key' })
	@IsString()
	readonly metakey: string

	@ApiProperty({ example: 'Доставка сейфов от компании Проммет', description: 'meta desc' })
	@IsString()
	readonly metadesc: string

	@ApiProperty({ example: '13.06.2022', description: 'Дата создания статьи' })
	@IsString()
	readonly fakeDate: string

	@ApiProperty({ example: 'test.jpg', description: 'Картинка' })
	@IsString()
	readonly image: string
}
export class UpdateNewsDto extends PartialType(CreateNewsDto) {}
