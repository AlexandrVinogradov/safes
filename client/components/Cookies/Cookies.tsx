import React, { useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { s } from './styles'

export const Cookies = () => {
	const [isShowCookies, setIsShowCookies] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('isAcceptCookies') === 'true') return

		setIsShowCookies(true)
	}, [])

	if (!isShowCookies) return null

	const handleApply = () => {
		localStorage.setItem('isAcceptCookies', 'true')
		setIsShowCookies(false)
	}

	return (
		<div className={s.cookies}>
			<p className={s.message}>Мы используем файлы cookie для обработки ваших персональных данных</p>
			<Button onClick={handleApply} styleType="filled">
				Принять
			</Button>
		</div>
	)
}
