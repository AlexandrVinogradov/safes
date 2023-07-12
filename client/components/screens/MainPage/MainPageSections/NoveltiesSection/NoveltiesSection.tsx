import { NextPage } from 'next/types'
import { container } from '@/styles/container'
import { ServerProductCardType } from '@/models/IProductStore'
import { ProductSliderSection } from '@/components/commonSections/ProductSliderSection/ProductSliderSection'
import { Button } from '@/components/Button/Button'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	productsList: ServerProductCardType[]
}

export const NoveltiesSection: NextPage<PropsType> = ({ productsList }) => {
	return (
		<section className={clsx(container, s.section)}>
			<ProductSliderSection className={s.productSliderSection} title="Новинки" productsList={productsList} />
			<Button href="catalog" className={s.button}>
				В каталог
			</Button>
		</section>
	)
}
