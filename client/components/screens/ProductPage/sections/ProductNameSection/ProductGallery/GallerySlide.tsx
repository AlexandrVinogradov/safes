import Image from 'next/image'

type PropsType = {
	slide: {
		id: number
		alt: string
		src: string
	}
}

export const GallerySlide = (props: PropsType) => {
	const { slide } = props
	const { alt, src } = slide

	return (
		<Image
			unoptimized={true}
			src={`https://prommetsafe.ru/components/com_jshopping/files/img_products/${src}`}
			alt={alt || 'Фото сейфа'}
			width="0"
			height="0"
			className=" !object-contain"
		/>
	)
}
