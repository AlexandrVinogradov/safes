import { CutIcon } from '@/icons/CutIcon'
import { YoutubeIcon2 } from '@/icons/YoutubeIcon2'
import { s } from './styles'
import { CutButton } from '@/components/CutButton/CutButton'
import { Button } from '@/components/Button/Button'

export const ContactsLinks = () => {
	return (
		<div className={s.contactsLinks}>
			<CutButton className={s.cutBlock}>
				<p className={s.cutBlockMessage}>Нашли дешевле? Снизим цену!</p>
				<CutIcon className={s.cutIcon} />

				<Button className={s.cutButton}>% Отправить заявку</Button>
			</CutButton>

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
