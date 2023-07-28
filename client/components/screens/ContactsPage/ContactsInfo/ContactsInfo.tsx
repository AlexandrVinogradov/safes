import { PhoneIcon } from '@/icons/PhoneIcon'
import { WhatsApp } from '@/icons/WhatsAppIcon'
import { ViberIcon } from '@/icons/ViberIcon'
import { MailIcon2 } from '@/icons/MailIcon2'
import { s } from './styles'
import clsx from 'clsx'

export const ContactsInfo = () => {
	return (
		<div className={s.contactsInfo}>
			<div className={s.firstBlock}>
				<a className={clsx(s.firstBlockLink, s.mb)} href="tel:84956415518">
					<PhoneIcon className={s.mr} />8 (495) 641-55-18
				</a>
				<a className={s.firstBlockLink} href="tel:89265878650">
					<PhoneIcon className={s.mr} />8 (926) 587-86-50
				</a>
			</div>
			<div className={s.secondBlock}>
				<div className={s.secondBlockLinks}>
					<a href="https://api.whatsapp.com/send?phone=79265878650" target="_blank">
						<WhatsApp />
					</a>
					<a href="viber://add?number=79265878650" target="_blank">
						<ViberIcon />
					</a>
				</div>
				<p className={s.secondBlockMessage}>В WhatsApp и Viber сообщения принимаются круглосуточно</p>
			</div>
			<div className={s.thirdBlock}>
				<a className={s.thirdBlockLink} href="mailto:prommetsafe@yandex.ru">
					<MailIcon2 className={s.mr} /> prommetsafe@yandex.ru
				</a>
			</div>
			<div className={s.fourthBlock}>
				<p>Время работы:</p>
				<p className={s.fourthBlockTime}>с 9.00 до 21.00</p>
				<p>без выходных</p>
			</div>
		</div>
	)
}
