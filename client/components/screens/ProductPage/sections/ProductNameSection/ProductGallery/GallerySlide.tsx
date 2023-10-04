import Image from 'next/image'
import { GalleryItemType } from './ProductGallery'

type PropsType = {
	slide: GalleryItemType
}

export const GallerySlide = (props: PropsType) => {
	const { slide } = props
	const { alt, src, videoHtml } = slide

	return (
		<>
			{src && (
				<Image
					unoptimized={true}
					src={`https://prommetsafe.ru/components/com_jshopping/files/img_products/${src}`}
					alt={alt || 'Фото сейфа'}
					width="0"
					height="0"
					className="!object-contain"
					quality={100}
				/>
			)}

			{/* {videoHtml && <div dangerouslySetInnerHTML={{ __html: videoHtml }} />} */}
		</>
	)
}
