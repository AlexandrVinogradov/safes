import Image from 'next/image'
import { Main } from '../../Main/Main'
import { Layout } from '@/components/layout/layout'
import { container } from '@/styles/container'
import { ContactsDescription } from './ContactsDescription/ContactsDescription'
import { ContactsInfo } from './ContactsInfo/ContactsInfo'
import { ContactsLinks } from './ContactsLinks/ContactsLinks'
import { CutModal } from '@/components/Modals/CutModal/CutModal'
import { s } from './styles'
import clsx from 'clsx'

const ContactsPage = () => {
	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Контакты', isActive: true },
	]

	return (
		<Layout title="Контакты">
			<CutModal />

			<Main breadCrumbs={breadCrumbs}>
				<Image src="/sh.png" alt="логотип ПРОММЕТСЕЙФ" width="352" height="941" className={s.image} />

				<section className={clsx(container, s.section)}>
					<ContactsDescription />
					<ContactsInfo />
					<ContactsLinks />
				</section>
			</Main>
		</Layout>
	)
}

export default ContactsPage
