import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { ReactNode } from 'react'
import { Meta } from '../Meta/Meta'
import { MetaType } from '../Meta/IMeta'

type PropsType = {
	children: ReactNode
}

export const Layout = (props: PropsType & MetaType) => {
	const { children, title, description } = props

	return (
		<Meta title={title} description={description}>
			<Header />
			{children}
			<Footer />
		</Meta>
	)
}
