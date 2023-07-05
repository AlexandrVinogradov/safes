import { Button } from '@/components/Button/Button'
import { s } from './styles'
import { PersonSummary } from './PersonSummary/PersonSummary'
import { BasketPreview } from '../../CartPage/sections/CartSection/BasketPreview/BasketPreview'

export const ConfirmTab = () => {
	const onSubmit = () => {
		// TODO: send email for prommet and for user
	}

	return (
		<form className={s.form} onSubmit={onSubmit}>
			<BasketPreview isEditMode={false} className={s.basketPreview} />
			<PersonSummary />

			<Button href="/order-is-processed" styleType="filled" className={s.confirmButton} type="submit">
				Подтвердить заказ
			</Button>
		</form>
	)
}
