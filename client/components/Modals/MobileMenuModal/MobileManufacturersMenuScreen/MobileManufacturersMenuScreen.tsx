import { useEffect } from 'react'
import { MobileMenuModalHeader } from '../MobileMenuModalHeader/MobileMenuModalHeader'
import { MobileScreenType } from '@/constants/nav'
import { useManufacturersStore } from '@/store/useManufacturersStore'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'
import Link from 'next/link'
import Image from 'next/image'
import { Collapse } from '@/components/Collapse/Collapse'
import { s } from './styles'
import { useModalStore } from '@/store/useModalStore'

type PropsType = {
	screen: MobileScreenType
	setScreen: (screen: MobileScreenType) => void
}

export const MobileManufacturersMenuScreen = (props: PropsType) => {
	const { screen, setScreen } = props

	const setIsMobileMenuModal = useModalStore((state) => state.setIsMobileMenuModal)

	const manufacturers = useManufacturersStore((state) => state.manufacturers)
	const fetchManufacturers = useManufacturersStore((state) => state.fetchManufacturers)

	const handleClickBack = () => setScreen('menu')

	useEffect(() => {
		if (manufacturers.length) return

		const API_URL = getClientServerUrl('manufacturers', { filter: 'byCountry' })
		fetchManufacturers(API_URL)
	}, [manufacturers.length])

	const handleClickLink = () => {
		setIsMobileMenuModal(false)
		setScreen('menu')
	}

	const items = manufacturers.map((el, id) => ({
		key: id + 1,
		label: (
			<span className={s.collapseLabel}>
				<Image unoptimized={true} src={`https://prommetsafe.ru/images/flags/${el.flag}`} alt={el.country} width="20" height="20" />
				<span>{el.country}</span>
			</span>
		),
		children: (
			<ul>
				{el.manufacturers.map((manufacturer) => (
					<li key={manufacturer.manufacturer_id}>
						<Link onClick={handleClickLink} href={manufacturer['alias_ru-RU']}>
							{manufacturer['name_ru-RU']}
						</Link>
					</li>
				))}
			</ul>
		),
	}))

	return (
		<section>
			<MobileMenuModalHeader title="Производители" onBack={handleClickBack} screen={screen} setScreen={setScreen} />
			<div className={s.collapseWrapper}>
				<Collapse items={items} className={s.collapse} />
			</div>
		</section>
	)
}
