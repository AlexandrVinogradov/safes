import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasOne, BelongsToMany, HasMany } from 'sequelize-typescript'
import { Category } from 'src/categories/categories.model'
import { ExtraValue } from 'src/extraValues/extraValues.model'
import { Manufacturer } from 'src/manufacturers/manufacturers.model'
import { ProductImage } from 'src/productImages/productImages.model'

export interface SafeCreationAttrs {
	// product_id: number
	product_ean: string
	image: string
}

@Table({ tableName: 'new_mz' })
export class Safe extends Model<Safe, SafeCreationAttrs> {
	@ApiProperty({ example: 675, description: 'Уникальный идентификатор' })
	@ForeignKey(() => ProductImage)
	@BelongsToMany(() => Category, {
		through: () => ProductToCategories,
		foreignKey: 'product_id',
		otherKey: 'category_id', // Имя поля в связующей таблице, указывающее на роль
		as: 'associatedSafes',
	})
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	product_id: number

	@ApiProperty({ example: 'ProductImages', description: 'images' })
	@BelongsToMany(() => ProductImage, {
		through: () => ProductImage, // Имя таблицы-связи между Safe и ProductImage
		foreignKey: 'product_id',
		otherKey: 'image_id',
		as: 'productImages', // Алиас для ассоциации с ProductImage
	})
	productImages: ProductImage[]

	@BelongsToMany(() => Safe, {
		through: () => ProductsRelations,
		as: 'relations',
		foreignKey: 'product_id',
		otherKey: 'product_related_id',
	})
	related: Safe[]

	@HasMany(() => ProductToCategories, 'product_id')
	categories: ProductToCategories[]

	@ApiProperty({ example: '1', description: 'код товара' })
	@Column({ type: DataType.STRING, allowNull: true })
	product_ean: string

	@ApiProperty({ example: '1', description: 'Показывать ли на фронте' })
	@Column({ type: DataType.BOOLEAN })
	product_publish: boolean

	// @ApiProperty({ example: '2022-10-10', description: 'Дата создания записи' })
	// @Column({ type: DataType.STRING, allowNull: true })
	// product_date_added: string

	// @ApiProperty({ example: '2022-10-10', description: 'Дата обновления записи' })
	// @Column({ type: DataType.STRING, allowNull: true })
	// date_modify: string

	@ApiProperty({ example: 28130.0, description: 'старая цена' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	product_old_price: number

	@ApiProperty({ example: 28130.0, description: 'цена' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	product_price: number

	@ApiProperty({ example: 435500.0, description: 'вес' })
	@Column({ type: DataType.DOUBLE, allowNull: true })
	product_weight: number

	@ApiProperty({ example: 'Primat_Alpha_1475.png', description: 'картинка' })
	@Column({ type: DataType.STRING, allowNull: true })
	image: string

	@ApiProperty({ example: 58, description: 'id производителя' })
	@ForeignKey(() => Manufacturer)
	@Column({ type: DataType.INTEGER, allowNull: true })
	product_manufacturer_id: number

	@ApiProperty({ example: 'ManufacturerTYPE', description: 'id производителя' })
	@BelongsTo(() => Manufacturer)
	manufacturer: Manufacturer

	@ApiProperty({ example: 'Сейф ALPHA 1475', description: 'Имя сейфа' })
	@Column({ type: DataType.STRING, allowNull: true })
	'name_ru-RU': string

	@ApiProperty({ example: 'alfa1475', description: 'сокращение для поиска мб' })
	@Column({ type: DataType.STRING, allowNull: true })
	'alias_ru-RU': string

	@ApiProperty({
		example:
			'Большой сейф PRIMAT для квартиры, дома или офиса. Универсальный сейф для документов и ценных вещей. Устойчивость сейфа к взлому сертифицирована по стандарту EN 1143-1.',
		description: 'короткое описание',
	})
	@Column({ type: DataType.TEXT, allowNull: true })
	'short_description_ru-RU': string

	@ApiProperty({ example: '<p>{tab Характеристики}</p> <h2>Характеристики сейфа ALPHA 1475</h2> ...', description: 'описание c тегами' })
	@Column({ type: DataType.TEXT, allowNull: true })
	'description_ru-RU': string

	@ApiProperty({ example: 'Взломостойкий сейф ALPHA 1475 купить в Промметсейф', description: 'хз' })
	@Column({ type: DataType.STRING, allowNull: true })
	'meta_title_ru-RU': string

	@ApiProperty({ example: 'Сейф ALPHA 1475 по доступным ценам с доставкой и установкой', description: 'хз' })
	@Column({ type: DataType.TEXT, allowNull: true })
	'meta_description_ru-RU': string

	@ApiProperty({ example: '1 класс', description: 'Взломостойкость' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	extra_field_3: number
	@HasOne(() => ExtraValue, {
		foreignKey: 'id',
		sourceKey: 'extra_field_3',
		constraints: false,
		as: 'extraFieldValue3',
	})
	extraFieldValue3: ExtraValue

	@ApiProperty({ example: '60Б - 60 минут', description: 'Огнестойкость' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	extra_field_4: number
	@HasOne(() => ExtraValue, {
		foreignKey: 'id',
		sourceKey: 'extra_field_4',
		constraints: false,
		as: 'extraFieldValue4',
	})
	extraFieldValue4: ExtraValue

	@ApiProperty({ example: '4 ствола', description: 'Кол-во стволов' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	extra_field_8: number
	@HasOne(() => ExtraValue, {
		foreignKey: 'id',
		sourceKey: 'extra_field_8',
		constraints: false,
		as: 'extraFieldValue8',
	})
	extraFieldValue8: ExtraValue

	@ApiProperty({ example: 'ключевой', description: 'Вид замка' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	extra_field_9: number
	@HasOne(() => ExtraValue, {
		foreignKey: 'id',
		sourceKey: 'extra_field_9',
		constraints: false,
		as: 'extraFieldValue9',
	})
	extraFieldValue9: ExtraValue

	@ApiProperty({ example: '200', description: 'Высота' })
	@Column({ type: DataType.STRING, allowNull: true })
	extra_field_10: string

	@ApiProperty({ example: '260', description: 'Ширина' })
	@Column({ type: DataType.STRING, allowNull: true })
	extra_field_11: string

	@ApiProperty({ example: '180', description: 'Глубина' })
	@Column({ type: DataType.STRING, allowNull: true })
	extra_field_12: string

	@ApiProperty({ example: 'дверь 10мм; корпус 3мм', description: 'Толщина металла' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	extra_field_20: number
	@HasOne(() => ExtraValue, {
		foreignKey: 'id',
		sourceKey: 'extra_field_20',
		constraints: false,
		as: 'extraFieldValue20',
	})
	extraFieldValue20: ExtraValue

	@ApiProperty({ example: 'хз', description: 'хз' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	extra_field_22: number
	@HasOne(() => ExtraValue, {
		foreignKey: 'id',
		sourceKey: 'extra_field_22',
		constraints: false,
		as: 'extraFieldValue22',
	})
	extraFieldValue22: ExtraValue

	@ApiProperty({ example: 'Сейф ALPHA 1475', description: 'хз' })
	@Column({ type: DataType.TEXT, allowNull: true })
	'meta_keyword_ru-RU': string

	@ApiProperty({ example: '410', description: 'Объем (л)' })
	@Column({ type: DataType.STRING, allowNull: true })
	extra_field_13: string

	@ApiProperty({ example: '1475х765х535', description: 'Габариты (мм) (ВхШхГ)' })
	@Column({ type: DataType.STRING, allowNull: true })
	extra_field_15: string

	@ApiProperty({ example: '1399х705х415', description: 'Внутренние размеры (ВхШхГ)' })
	@Column({ type: DataType.STRING, allowNull: true })
	extra_field_17: string
}

// FIXME: SafeCreationAttrs
@Table({ tableName: 'products_to_categories', timestamps: false })
export class ProductToCategories extends Model<ProductToCategories, SafeCreationAttrs> {
	@ApiProperty({ example: 675, description: 'Product id' })
	@ForeignKey(() => Safe)
	@Column({ type: DataType.INTEGER })
	product_id: number

	@ApiProperty({ example: 675, description: 'Category id' })
	@ForeignKey(() => Category)
	@Column({ type: DataType.INTEGER })
	category_id: number

	@ApiProperty({ example: 3, description: 'хз' })
	@Column({ type: DataType.INTEGER })
	product_ordering: number
}

@Table({ tableName: 'products_relations', timestamps: false })
export class ProductsRelations extends Model<ProductsRelations, SafeCreationAttrs> {
	@ApiProperty({ example: 675, description: 'id' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number

	@ApiProperty({ example: 675, description: 'product_id' })
	@ForeignKey(() => Safe)
	@BelongsTo(() => Safe, { foreignKey: 'product_id', as: 'product' })
	@Column({ type: DataType.INTEGER })
	product_id: number

	@ApiProperty({ example: 3, description: 'product_id' })
	@ForeignKey(() => Safe)
	@BelongsTo(() => Safe, { foreignKey: 'product_related_id', as: 'relatedProduct' })
	@Column({ type: DataType.INTEGER })
	product_related_id: number
}
