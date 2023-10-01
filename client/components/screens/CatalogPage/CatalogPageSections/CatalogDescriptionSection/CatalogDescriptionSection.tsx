import { container } from '@/styles/container'
import styles from '../../../../../styles/ServerHTML.module.scss'
import clsx from 'clsx'
import { s } from './styles'

type PropsType = {
	description: string | undefined
}
export const CatalogDescriptionSection = (props: PropsType) => {
	const { description } = props

	if (!description) return null

	return (
		<section className={clsx(container, s.section)}>
			<div className={styles.content} dangerouslySetInnerHTML={{ __html: description }} />
		</section>
	)
}
