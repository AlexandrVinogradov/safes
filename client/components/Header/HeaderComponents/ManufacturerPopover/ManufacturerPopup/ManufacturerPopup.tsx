import { useEffect } from 'react'
import { useManufacturersStore } from '@/store/useManufacturersStore'
import { getClientServerUrl } from '@/helpers/getClientServerUrl'
import { getClearManufacturerName } from '@/helpers/getClearManufacturerName'
import Image from 'next/image'
import Link from 'next/link'
import { s } from './styles'

type PropsType = {
	isHovering: boolean
	handleMouseOver: () => void
	handleMouseOut: () => void
	setIsHovering: (isHovering: boolean) => void
}

// TODO: add preloader
export const ManufacturerPopup = (props: PropsType) => {
	const { isHovering, handleMouseOver, handleMouseOut, setIsHovering } = props
	const manufacturers = useManufacturersStore((state) => state.manufacturers)
	const fetchManufacturers = useManufacturersStore((state) => state.fetchManufacturers)

	useEffect(() => {
		if (manufacturers.length || !isHovering) return

		const API_URL = getClientServerUrl('manufacturers', { filter: 'byCountry', isPublish: 'true' })
		fetchManufacturers(API_URL)
	}, [isHovering])

	if (!isHovering) return null

	const handleClickLink = () => setIsHovering(false)

	return (
		<div className={s.popup} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			<div className={s.space} />
			<ul className={s.list}>
				{manufacturers?.map((el, id) => (
					<li key={el.country || id}>
						<div className={s.titleWithFlag}>
							{el.flag && (
								<Image
									unoptimized={true}
									src={`https://prommetsafe.ru/images/flags/${el.flag}`}
									alt={el.country}
									width="20"
									height="20"
								/>
							)}

							<span className={s.title}>{el.country}</span>
						</div>
						<ul className={s.countryList}>
							{el.manufacturers.map((man) => {
								if (!man['name_ru-RU']) return

								return (
									<li key={man.manufacturer_id}>
										<Link onClick={handleClickLink} className={s.link} href={man['alias_ru-RU']}>
											{getClearManufacturerName(man['name_ru-RU'])}
										</Link>
									</li>
								)
							})}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
