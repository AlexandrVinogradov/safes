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

	@ApiProperty({ example: '241515', description: 'Цена' })
	@IsString()
	readonly product_price: number

	@ApiProperty({ example: '241515', description: 'Цена' })
	@IsString()
	readonly product_old_price: number


	@ApiProperty({ example: '303525', description: 'Артикул' })
	@IsString()
	readonly product_ean: string

	@ApiProperty({ example: '3', description: 'Id производителя' })
	@IsString()
	readonly product_manufacturer_id: number

	@ApiProperty({ example: '3,23', description: 'Категории' })
	@IsString()
	readonly categories: string

	@ApiProperty({ example: '3,23', description: 'Related id array' })
	@IsString()
	readonly relatedSafes: string

	@ApiProperty({ example: '200x260x180', description: 'Габариты (мм) (ВхШхГ)' })
	@IsString()
	readonly extra_field_15: string

	@ApiProperty({ example: '138x212x100', description: 'Внутренние размеры (ВхШхГ)' })
	@IsString()
	readonly extra_field_17: string

	@ApiProperty({ example: '21.0000', description: 'Вес (кг)' })
	@IsString()
	readonly product_weight: number

	@ApiProperty({ example: '3', description: 'Объем (л)' })
	@IsString()
	readonly extra_field_13: string
	//
	@ApiProperty({ example: '3', description: 'Взломостойкость' })
	@IsString()
	readonly extra_field_3: number

	@ApiProperty({ example: '4', description: 'Огнестойкость' })
	@IsString()
	readonly extra_field_4: number

	@ApiProperty({ example: '4', description: 'Вид замка' })
	@IsString()
	readonly extra_field_9: number

	@ApiProperty({ example: '4', description: 'Кол-во стволов' })
	@IsString()
	readonly extra_field_8: number

	@ApiProperty({ example: '4', description: 'Толщина металла' })
	@IsString()
	readonly extra_field_20: number

	@ApiProperty({ example: '200', description: 'Высота (мм)' })
	@IsString()
	readonly extra_field_10: string

	@ApiProperty({ example: '260', description: 'Ширина (мм)' })
	@IsString()
	readonly extra_field_11: string

	@ApiProperty({ example: '180', description: 'Глубина (мм)' })
	@IsString()
	readonly extra_field_12: string
}

export class UpdateSafeDto extends PartialType(CreateSafeDto) {}
