'use client'
import { MailIcon } from '@/app/icons/MailIcon'
import { PhoneIcon } from '@/app/icons/PhoneIcon'
import { useModalStore } from '@/app/store/useModalStore'
import { s } from './styles'

export const Contacts = () => {
	const setIsRequestCallModal = useModalStore((state) => state.setIsRequestCallModal)

	const handleOpenRequestCallModal = () => setIsRequestCallModal(true)

	return (
		<div className={s.contactsWrapper}>
			<div className={s.contacts}>
				<div className={s.schedule}>
					<p>Пн - Вс:</p>
					<p>с 9.00 до 21.00</p>
				</div>

				<div>
					<a className={s.phoneLink} href="tel:84956415518">
						8 (495) 641-55-18
					</a>
					<a className={s.phoneLink} href="tel:89265878650">
						8 (926) 587-86-50
					</a>
				</div>
			</div>

			<div className={s.contactIcons}>
				<button onClick={handleOpenRequestCallModal}>
					<PhoneIcon />
				</button>

				<a className="block" href="mailto:prommetsafe@yandex.ru">
					<MailIcon />
				</a>
			</div>
		</div>
	)
}
