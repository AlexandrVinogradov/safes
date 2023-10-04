import React, { useState } from 'react'
import type { SelectProps } from 'antd'
import { Divider, Select } from 'antd'
import { useRouter } from 'next/router'
import { useQueryParams } from '@/hooks/useQueryParams'
import { s } from './styles'
import { Button } from '../Button/Button'

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

	const { query } = useRouter()
	const { setQueryParams, removeQueryParams } = useQueryParams()

	const value = query[id] as string

	const selectProps: SelectProps = {
		open,
		mode: 'multiple',
		placeholder: 'Все',
		value: value?.split('-'),
		style: { width: '100%' },
		// maxTagCount: 'responsive',
		options,

		optionFilterProp: 'children',
		filterOption: (input, option) => String(option?.label).toLocaleLowerCase().includes(input.toLocaleLowerCase()),

		onDropdownVisibleChange: (visible) => setOpen(visible),
		onChange: (newValue: string[]) => {
			if (!newValue.length) {
				removeQueryParams([id])
				return
			}

			setQueryParams({ [id]: newValue.join('-'), page: '1' })
		},
	}

	const handleClickReset = () => {
		value && removeQueryParams([id])
		setOpen(false)
	}
	const handleClickDone = () => setOpen(false)

	return (
		<Select
			className={className}
			{...selectProps}
			dropdownRender={(menu) => (
				<>
					{menu}
					<Divider style={{ margin: '8px 0' }} />

					<div className={s.buttons}>
						<Button className={s.button} onClick={handleClickReset}>
							Сбросить
						</Button>

						<Button className={s.button} styleType="filled" onClick={handleClickDone}>
							Готово
						</Button>
					</div>
				</>
			)}
		/>
	)
}

export default MultiSelect
