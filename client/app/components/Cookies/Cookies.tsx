import React, { useState } from 'react'
import { s } from './styles'
import { Button } from '../Button/Button'
import clsx from 'clsx'

export const Cookies = () => {
	const [isShowCookies, setIsShowCookies] = useState(true)

	const handleApply = () => setIsShowCookies(false)
	return (
		<div className={clsx(!isShowCookies && 'hidden', s.cookies)}>
			<p className={s.message}>Мы используем файлы cookie для обработки ваших персональных данных</p>
			<Button onClick={handleApply} type="filled">
				Принять
			</Button>
		</div>
	)
}
