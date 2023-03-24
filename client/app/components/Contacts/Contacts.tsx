import Image from 'next/image'
import { s } from './styles'

type PropsType = { handleOpenRequestCallModal?: () => void }

export const Contacts = (props: PropsType) => {
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
				<a href="tel:89265878650">
					<Image src="/phoneIcon.svg" alt="Позвоните нам" width={22} height={22} priority />
				</a>

				{/* <a className="block" href="tel:89265878650">
					<Image src="/mailIcon.svg" alt="Напишите нам" width={27} height={20} priority />
				</a> */}

				{/* @ts-ignore */}
				<button onClick={() => props.handleOpenRequestCallModal()}>
					<Image src="/mailIcon.svg" alt="Напишите нам" width={27} height={20} priority />
				</button>
			</div>
		</div>
	)
}
