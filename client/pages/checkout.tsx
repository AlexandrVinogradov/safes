import { NextPage } from 'next'
import CheckoutPage from '@/components/screens/CheckoutPage/CheckoutPage'
import { useBasketStore } from '@/store/useBasketStore'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Checkout: NextPage = () => {
	const basketItems = useBasketStore((state) => state.basketItems)
	const router = useRouter()

	useEffect(() => {
		if (basketItems?.length) return

		router.replace('/cart')
	}, [])

	return <CheckoutPage />
}

export default Checkout
