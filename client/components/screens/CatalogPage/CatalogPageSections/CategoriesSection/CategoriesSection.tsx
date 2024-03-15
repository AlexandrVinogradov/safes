import { CategoryType } from '@/models/ICategoriesStore'
import { s } from './styles'
import clsx from 'clsx'
import { container } from '@/styles/container'
import Link from 'next/link'
import Image from 'next/image'
import { apiUrl } from '@/constants/apiUrl'
import { replaceImageExtensions } from '@/helpers/replaceImageExtensions'

type PropsType = {
	selectedCategory: CategoryType
}

export const CategoriesSection = (props: PropsType) => {
	const { selectedCategory } = props

	if (!selectedCategory || !selectedCategory.child) return null

	return (
		<section className={clsx(container, s.section)}>
			<div className={s.wrapper}>
				<ul className={s.categoriesList}>
					{selectedCategory.child.map((el: any) => (
						<Link key={el.category_id} href={el['alias_ru-RU']} className={s.childCategoryLink}>
							<Image
								unoptimized={true}
								src={`${apiUrl}/img_categories/${replaceImageExtensions(el.category_image)}`}
								alt={el['name_ru-RU']}
								width={80}
								height={80}
							/>
							<span className={s.childCategoryLinkName}> {el['name_ru-RU']}</span>
						</Link>
					))}
				</ul>
			</div>
		</section>
	)
}
