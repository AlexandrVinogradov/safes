import React, { useRef, useState } from 'react'
import type { SelectProps } from 'antd'
import { Select } from 'antd'
import { useRouter } from 'next/router'
import { useQueryParams } from '@/hooks/useQueryParams'

type PropsType = {
	options: ItemProps[]
	className?: string
	id: 'manufacturer' | 'burglaryResistance' | 'fireResistance' | 'keyType' | 'gunCount' | 'metalThickness'
}

type ItemProps = {
	label: string
	value: string
}

const MultiSelect = (props: PropsType) => {
	const { className, options, id } = props

	const [open, setOpen] = useState(false)
	// FIXME:
	const selectRef = useRef<any>()

	const { query } = useRouter()
	const { setQueryParams, removeQueryParams } = useQueryParams()

	const value = query[id] as string

	const selectProps: SelectProps = {
		open,
		mode: 'multiple',
		placeholder: 'Все',
		value: value?.split('-'),
		style: { width: '100%' },
		maxTagCount: 'responsive',
		options: [{ label: 'Все', value: 'all' }, ...options],
		onFocus: () => setOpen(true),
		onBlur: () => setOpen(false),
		onChange: (newValue: string[]) => {
			if (newValue.includes('all')) {
				removeQueryParams([id])
				setOpen(false)
				selectRef.current?.blur()

				return
			}

			if (!newValue.length) {
				removeQueryParams([id])
				return
			}

			setQueryParams({ [id]: newValue.join('-') })
		},
	}

	return <Select ref={selectRef} className={className} {...selectProps} />
}

export default MultiSelect
