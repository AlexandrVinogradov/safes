import { FormEvent } from 'react'
import { Button } from '@/components/Button/Button'
import { s } from './styles'
import { PersonSummary } from './PersonSummary/PersonSummary'
import { BasketPreview } from '../../CartPage/sections/CartSection/BasketPreview/BasketPreview'
import { useBasketStore } from '@/store/useBasketStore'
import { useRouter } from 'next/router'

export const ConfirmTab = () => {
	const clearItems = useBasketStore((state) => state.clearItems)
	const router = useRouter()

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// TODO: send email for prommet and for user

		setTimeout(() => {
			clearItems()
		}, 1_000)
		router.replace('/order-is-processed')
	}

	return (
		<form className={s.form} onSubmit={onSubmit}>
			<BasketPreview isEditMode={false} className={s.basketPreview} />
			<PersonSummary />

			<Button styleType="filled" className={s.confirmButton} type="submit">
				Подтвердить заказ
			</Button>
		</form>
	)
}
