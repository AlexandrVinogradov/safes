import { CutIcon } from '@/icons/CutIcon'
import { Button } from '@/components/Button/Button'
import { YoutubeIcon2 } from '@/icons/YoutubeIcon2'
import { useModalStore } from '@/store/useModalStore'
import { s } from './styles'

export const ContactsLinks = () => {
	const setIsCutModal = useModalStore((state) => state.setIsCutModal)

	const handleClickCutButton = () => setIsCutModal(true)

	return (
		<div className={s.contactsLinks}>
			<div className={s.cutBlock} onClick={handleClickCutButton}>
				<p className={s.cutBlockMessage}>Нашли дешевле? Снизим цену!</p>
				<CutIcon className={s.cutIcon} />

				<Button className={s.cutButton}>% Отправить заявку</Button>
			</div>
			<div className={s.ytBlock}>
				<a rel="noreferrer" href="https://www.youtube.com/channel/UCaRW0DJyJQiJI-nfOtVBlZg" target="_blank" className={s.ytLink}>
					Наш YOUTUBE-канал
				</a>
				<a rel="noreferrer" href="https://www.youtube.com/channel/UCaRW0DJyJQiJI-nfOtVBlZg" target="_blank">
					<YoutubeIcon2 />
				</a>
			</div>
		</div>
	)
}
