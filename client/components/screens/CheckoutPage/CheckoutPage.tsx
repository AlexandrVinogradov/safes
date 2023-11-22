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
import { ConfirmTab } from './ConfirmTab/ConfirmTab'

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
	const [isRequiredFieldsAreFilled, setIsRequiredFieldsAreFilled] = useState(true)
	const router = useRouter()

	const breadCrumbs = [
		{ name: 'Главная', isActive: false, to: '/' },
		{ name: 'Корзина', isActive: false, to: '/cart' },
		{ name: 'Оформление заказа', isActive: true },
	]

	const getTabStyles = (tab: SelectedTabType) => {
		if (selectedTab === tab) return 'filled'
		return 'outlined'
	}

	const handleClickBack = () => {
		if (selectedTab === 'personal') router.back()
		if (selectedTab === 'delivery') setSelectedTab('personal')
		if (selectedTab === 'confirm') setSelectedTab('delivery')
	}

	return (
		<Layout title="CHECKOUT">
			<Main breadCrumbs={breadCrumbs}>
				<section className={clsx(container, s.section)}>
					<h1 className={s.title}>Оформление заказа</h1>
					<button onClick={handleClickBack} className={s.backButton}>
						<LongArrowLeftIcon />
						Назад
					</button>

					<div className={s.tabButtons}>
						<Button
							styleType={getTabStyles('personal')}
							className={clsx(selectedTab !== 'personal' && s.mobileHidden, s.tabButton)}
							onClick={() => setSelectedTab('personal')}
						>
							1. Личные данные
						</Button>
						<Button
							disabled={isRequiredFieldsAreFilled}
							styleType={getTabStyles('delivery')}
							className={clsx(selectedTab !== 'delivery' && s.mobileHidden, s.tabButton)}
							onClick={() => setSelectedTab('delivery')}
						>
							2. Способ доставки
						</Button>
						<Button
							disabled={isRequiredFieldsAreFilled}
							styleType={getTabStyles('confirm')}
							className={clsx(selectedTab !== 'confirm' && s.mobileHidden, s.tabButton)}
							onClick={() => setSelectedTab('confirm')}
						>
							3. Подтвердить заказ
						</Button>
					</div>

					<StateMachineProvider>
						{selectedTab === 'personal' && (
							<PersonalForm setSelectedTab={setSelectedTab} setIsRequiredFieldsAreFilled={setIsRequiredFieldsAreFilled} />
						)}
						{selectedTab === 'delivery' && <DeliveryForm setSelectedTab={setSelectedTab} />}
						{selectedTab === 'confirm' && <ConfirmTab />}
					</StateMachineProvider>
				</section>
			</Main>
		</Layout>
	)
}

export default CheckoutPage
