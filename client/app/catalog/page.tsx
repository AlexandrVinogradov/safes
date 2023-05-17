'use client'
import { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { SearchParamsType } from '../types/SearchParamsType'
import { CatalogSection } from './sections/CatalogSection/CatalogSection'

type PropsType = {
	searchParams: SearchParamsType
}
export default function CatalogPage(props: PropsType) {
	const { searchParams } = props

	const fetchCategories = useProductStore((state) => state.fetchCategories)
	const categories = useProductStore((state) => state.categories)

	useEffect(() => {
		fetchCategories('http://localhost:5000/categories')
	}, [])

	console.log(categories)

	return (
		<main>
			<pre>{JSON.stringify(categories, undefined, 2)}</pre>
			<CatalogSection searchParams={searchParams} />
		</main>
	)
}
