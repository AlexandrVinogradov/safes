import { ProductCardType } from './IProductStore'

export type ComparisonItemType = Omit<ProductCardType, 'manufacturer'> & { manufacturer: string }
