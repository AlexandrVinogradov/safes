import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreateProductImageDto {
	// @ApiProperty({ example: 'Сейфы VALBERG (Россия)', description: 'Имя' })
	// @IsString()
	// readonly image_id: string

	@ApiProperty({ example: '17587', description: 'Id картинки' })
	@IsNumber()
	readonly product_id: number

	// @ApiProperty({ example: '1', description: 'Позиция' })
	// @IsNumber()
	// readonly ordering: number
}

export class UpdateProductImageDto extends PartialType(CreateProductImageDto) {}
