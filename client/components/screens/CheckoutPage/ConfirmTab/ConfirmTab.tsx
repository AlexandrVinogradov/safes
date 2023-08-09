import { Button } from '@/components/Button/Button'
import { s } from './styles'
import { PersonSummary } from './PersonSummary/PersonSummary'
import { BasketPreview } from '../../CartPage/sections/CartSection/BasketPreview/BasketPreview'
import { useBasketStore } from '@/store/useBasketStore'
import { useRouter } from 'next/router'

export const ConfirmTab = () => {
	const clearItems = useBasketStore((state) => state.clearItems)
	const router = useRouter()

	const onSubmit = () => {
		// TODO: send email for prommet and for user

		// prefetch ???
		clearItems()

		// FIXME: page reload
		// router.push('/order-is-processed', undefined, { shallow: true })
		router.replace('/order-is-processed')
	}

	return (
		<form className={s.form} onSubmit={onSubmit}>
			<BasketPreview isShowDeleted={false} isEditMode={false} className={s.basketPreview} />
			<PersonSummary />

			<Button
				// href="/order-is-processed"
				styleType="filled"
				className={s.confirmButton}
				type="submit"
			>
				Подтвердить заказ
			</Button>
		</form>
	)
}
