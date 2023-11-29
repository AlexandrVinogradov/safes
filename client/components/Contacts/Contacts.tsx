import { PhoneButton } from './PhoneButton/PhoneButton'
import { MailButton } from './MailButton/MailButton'
import { s } from './styles'
import clsx from 'clsx'

type PropsType = {
	className?: string
}

export const Contacts = (props: PropsType) => {
	const { className } = props

	return (
		<div className={clsx(s.contactsWrapper, className)}>
			<div className={s.contacts}>
				<div className={s.schedule}>
					<p>Пн - Вс:</p>
					<p>с 9.00 до 21.00</p>
					<p>Наша почта:</p>
				</div>

				<div>
					<a className={s.link} href="tel:84956415518">
						8 (495) 641-55-18
					</a>
					<a className={s.link} href="tel:89265878650">
						8 (926) 587-86-50
					</a>
					<a className={s.link} href="mailto:prommetsafe@yandex.ru">
						prommetsafe@yandex.ru
					</a>
				</div>
			</div>

			<div className={s.contactIcons}>
				<PhoneButton />

				<MailButton />
			</div>
		</div>
	)
}
