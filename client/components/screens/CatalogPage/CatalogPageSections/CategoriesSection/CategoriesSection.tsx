import { CategoryType } from '@/models/ICategoriesStore'
import { useRouter } from 'next/router'
import { s } from './styles'
import clsx from 'clsx'
import { container } from '@/styles/container'
import Link from 'next/link'
import Image from 'next/image'
import { getSelectCategory } from '@/helpers/getSelectCategory'

type PropsType = {
	category: CategoryType
}

export const CategoriesSection = (props: PropsType) => {
	const { category } = props

	let selectedCategory
	if (category) {
		const { query } = useRouter()
		selectedCategory = getSelectCategory(category, query.id as string)
	}

	return (
		<section className={clsx(container, s.section)}>
			<h1 className={s.title}>{selectedCategory['name_ru-RU']}</h1>

			{selectedCategory && selectedCategory.child && (
				<ul className={s.categoriesList}>
					{selectedCategory.child.map((el: any) => (
						<Link key={el.category_id} href={el['alias_ru-RU']} className={s.childCategoryLink}>
							<Image src="/categoriesImg1.png" alt={el['name_ru-RU']} width={50} height={50} />
							<span className={s.childCategoryLinkName}> {el['name_ru-RU']}</span>
						</Link>
					))}
				</ul>
			)}
		</section>
	)
}
