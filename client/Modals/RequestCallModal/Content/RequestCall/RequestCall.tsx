import { RequestCallForm } from './RequestCallForm/RequestCallForm'
import { commonStyles } from '../commonStyles'

// FIXME: add time condition
export const RequestCall = () => {
	return (
		<div className={commonStyles.content}>
			<h3 className={commonStyles.title}>Заказ обратного звонка</h3>
			<p className={commonStyles.message}>К сожалению, мы сегодня уже не работаем. Перезвоним Вам завтра.</p>
			<RequestCallForm />
		</div>
	)
}
