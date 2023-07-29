import { Button } from '@/components/Button/Button'
import { s } from './styles'
import { useModalStore } from '@/store/useModalStore'

export const CutModalInfo = () => {
	const isCutModalInfoRead = useModalStore((state) => state.isCutModalInfoRead)
	const setIsCutModalInfoRead = useModalStore((state) => state.setIsCutModalInfoRead)

	if (isCutModalInfoRead) return null

	const handleSendRequest = () => setIsCutModalInfoRead(true)

	return (
		<div className={s.wrapper}>
			<h3 className={s.title}>Правила программы «Гарантия лучшей цены»</h3>
			<p className={s.conditions}>Мы готовы продать Вам товар по цене конкурента или ниже, при соблюдении следующих условий:</p>

			<p className={s.item}>1. Конкурент – компания, занимающаяся продажей сейфов и аналогичного оборудования в г. Москва</p>
			<p className={s.item}>
				2. Предложение магазина «Промметсейф» и Конкурента полностью совпадают: наименование товара, модель, технические
				характеристики, комплектация и цвет.
			</p>
			<p className={s.item}>3. Товар у Конкурента есть в наличии, доступен для самовывоза или доставки в ближайшее время.</p>
			<p className={s.item}>
				4. Подтверждением более низкой цены товара является страница на официальном сайте Конкурента. Сайт Конкурента должен быть
				актуальным и содержать обновленную информацию на день обращения.
			</p>
			<p className={s.item}>
				5. Рассматриваемый товар Конкурента не должен относиться к спецпредложениям, участвовать в рекламных акциях или быть
				витринным образцом.
			</p>
			<p className={s.item}>
				6. Предложение Конкурента не должно являться очевидной ошибкой или быть обусловлено техническим сбоем сайта.
			</p>
			<p className={s.item}>
				7. Менеджер компании вправе отказать в предоставлении скидки по программе, если не предоставляется возможности убедиться в
				актуальности цены Конкурента или подтвердить наличие товара.
			</p>
			<p className={s.item}>8. В акции участвует не весь товар.</p>
			<p className={s.item}>Более подробную информацию вы можете уточнить у наших менеджеров.</p>

			<div className={s.buttonWrapper}>
				<Button className={s.button} onClick={handleSendRequest}>
					% Отправить заявку на скидку
				</Button>
			</div>
		</div>
	)
}
