import { Layout } from '@/components/layout/layout'
import { Main } from '../../Main/Main'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { container } from '@/styles/container'
import clsx from 'clsx'
import { LongArrowLeftIcon } from '@/icons/LongArrowLeftIcon'
import { Button } from '@/components/Button/Button'
import { s } from './styles'
import { PersonalForm } from './PersonalForm/PersonalForm'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { DeliveryForm } from './DeliveryForm/DeliveryForm'

export type SelectedTabType = 'personal' | 'delivery' | 'confirm'

createStore(
	{
		name: '',
		email: '',
		address: '',
		phone: '',
		comment: '',
		isAgree: false,
	},
	{
		name: 'personalForm',
		storageType: typeof window !== 'undefined' ? window.localStorage : undefined,
	},
)

const CheckoutPage = () => {
	const [selectedTab, setSelectedTab] = useState<SelectedTabType>('personal')
	const [isDisabledConfirmTab, setIsDisabledConfirmTab] = useState(true)
	const router = useRouter()

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Корзина', isActive: false, to: '/' },
		{ name: 'Оформление заказа', isActive: true },
	]

	const getTabStyles = (tab: SelectedTabType) => {
		if (selectedTab === tab) return 'filled'
		return 'outlined'
	}

	return (
		<Layout title="CHECKOUT">
			<Main breadCrumbs={breadCrumbs}>
				<section className={clsx(container, s.section)}>
					<h1 className={s.title}>Оформление заказа</h1>
					<button onClick={() => router.back()} className={s.backButton}>
						<LongArrowLeftIcon />
						Назад
					</button>

					<div className={s.tabButtons}>
						<Button
							styleType={getTabStyles('personal')}
							className={clsx(s.tabButton)}
							onClick={() => setSelectedTab('personal')}
						>
							1. Личные данные
						</Button>
						<Button
							styleType={getTabStyles('delivery')}
							className={clsx(s.tabButton)}
							onClick={() => setSelectedTab('delivery')}
						>
							2. Способ доставки
						</Button>
						<Button
							disabled={isDisabledConfirmTab}
							styleType={getTabStyles('confirm')}
							className={clsx(s.tabButton)}
							onClick={() => setSelectedTab('confirm')}
						>
							3. Подтвердить заказ
						</Button>
					</div>

					<StateMachineProvider>
						{selectedTab === 'personal' && (
							<PersonalForm setSelectedTab={setSelectedTab} setIsDisabledConfirmTab={setIsDisabledConfirmTab} />
						)}
						{selectedTab === 'delivery' && <DeliveryForm setSelectedTab={setSelectedTab} />}
					</StateMachineProvider>
				</section>
			</Main>
		</Layout>
	)
}

export default CheckoutPage
