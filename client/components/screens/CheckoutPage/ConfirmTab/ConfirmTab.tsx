import { s } from './styles'
import { PersonSummary } from './PersonSummary/PersonSummary'
import { BasketPreview } from '../../CartPage/sections/CartSection/BasketPreview/BasketPreview'

export const ConfirmTab = () => {
	return (
		<div className={s.confirmTab}>
			<BasketPreview isEditMode={false} className={s.basketPreview} />
			<PersonSummary />
		</div>
	)
}
