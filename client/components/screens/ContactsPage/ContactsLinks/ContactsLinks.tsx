import { CutIcon } from '@/icons/CutIcon'
import { Button } from '@/components/Button/Button'
import { YoutubeIcon2 } from '@/icons/YoutubeIcon2'
import { s } from './styles'

export const ContactsLinks = () => {
	const handleClickCutButton = () => {}

	return (
		<div className={s.contactsLinks}>
			<div className={s.cutBlock} onClick={handleClickCutButton}>
				<p className={s.cutBlockMessage}>Нашли дешевле? Снизим цену!</p>
				<CutIcon className={s.cutIcon} />

				<Button className={s.cutButton}>% Отправить заявку</Button>
			</div>
			<div className={s.ytBlock}>
				<a
					href="https://www.youtube.com/channel/UCaRW0DJyJQiJI-nfOtVBlZg"
					target="_blank"
					className={s.ytLink}
				>
					Наш YOUTUBE-канал
				</a>
				<a href="https://www.youtube.com/channel/UCaRW0DJyJQiJI-nfOtVBlZg" target="_blank">
					<YoutubeIcon2 />
				</a>
			</div>
		</div>
	)
}
