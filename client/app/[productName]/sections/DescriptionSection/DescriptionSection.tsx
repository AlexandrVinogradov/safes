'use client'
import { useState } from 'react'
import { container } from '@/app/styles/container'
import clsx from 'clsx'

type PropsType = {
	description: string | undefined
}

export const DescriptionSection = (props: PropsType) => {
	const { description } = props
	const [tab, setTab] = useState('1')

	// var str = 'awdawd awdaw sss dawdawd'
	var x = ['<p>{tab Характеристики}</p>\r\n', '<p style=text-align: justify;>{tab Описание}</p>\r\n']

	let rExp: RegExp[] = []
	x.forEach((el) => {
		rExp.push(new RegExp(el, 'g'))
	})

	let newN = ''
	rExp.forEach((el) => {
		newN = description?.replace(el, '') || ''
	})

	return (
		<section className={clsx('pt-[80px]', container)}>
			<div dangerouslySetInnerHTML={{ __html: newN ?? '' }}></div>
		</section>
	)
}
