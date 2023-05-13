'use client'
import { SearchParamsType } from '../types/SearchParamsType'
import { CatalogSection } from './sections/CatalogSection/CatalogSection'

type PropsType = {
	searchParams: SearchParamsType
}
export default function CatalogPage(props: PropsType) {
	const { searchParams } = props

	return (
		<main>
			<CatalogSection searchParams={searchParams} />
		</main>
	)
}
