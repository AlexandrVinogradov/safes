import { useModalStore } from '@/store/useModalStore'
import { s } from './styles'

export const ContactsDescription = () => {
	const setIsRequestCallModal = useModalStore((state) => state.setIsRequestCallModal)

	const handleOpenRequestCallModal = () => setIsRequestCallModal(true)

	return (
		<>
			<h1 className={s.title}>Контакты интернет-магазина Промметсейф</h1>
			<p className={s.messageTab1}>
				Компания Промметсейф представляет ведущих мировых производителей систем безопасности. Наши опытные специалисты
				проконсультируют и помогут Вам в выборе сейфа, металлической мебели и с оформлением заказа.
			</p>
			<p className={s.messageTab2}>
				Мы <span className={s.link}>доставляем</span> сейфы по Москве и в любую точку России! (транспортная компания на выбор).
				Товар можно купить через корзину, позвонив по многоканальному телефону (указанному ниже), а также{' '}
				<button className={s.link} type="button" onClick={handleOpenRequestCallModal}>
					заказать обратный звонок
				</button>
				!
			</p>
		</>
	)
}
