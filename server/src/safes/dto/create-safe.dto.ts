import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateSafeDto {
	@ApiProperty({ example: 'Сейфы VALBERG (Россия)', description: 'Имя' })
	@IsString()
	readonly 'name_ru-RU': string

	@ApiProperty({ example: 'safe-mdtb', description: 'url' })
	@IsString()
	readonly 'alias_ru-RU': string

	@ApiProperty({ example: 'Немецкие производители всегда...', description: 'Описание' })
	@IsString()
	readonly 'description_ru-RU': string

	@ApiProperty({ example: '1 класс', description: 'Описание техническое' })
	@IsString()
	readonly 'short_description_ru-RU': string

	@ApiProperty({ example: 'Сейфы Valberg — купить сейф Valberg в Москве', description: 'Title' })
	@IsString()
	readonly 'meta_title_ru-RU': string

	@ApiProperty({ example: 'Продажа сейфов Valberg с доставкой..', description: 'Title' })
	@IsString()
	readonly 'meta_description_ru-RU': string

	@ApiProperty({ example: 'Сейфы Valberg', description: 'Keywords' })
	@IsString()
	readonly 'meta_keyword_ru-RU': string

	@ApiProperty({ example: 'true', description: 'Показывать ли на фронте' })
	@IsString()
	readonly product_publish: boolean
}

export class UpdateSafeDto extends PartialType(CreateSafeDto) {}
