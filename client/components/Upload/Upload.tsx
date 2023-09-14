import { UploadOutlined } from '@ant-design/icons'
import type { UploadFile, UploadProps } from 'antd'
import { message, Upload } from 'antd'
import { Button } from '../Button/Button'
import { s } from './styles'

type PropsType = {
	className?: string
	fileList: UploadFile<any>[]
	setFileList: (fileList: UploadFile<any>[]) => void
}

export const CustomUpload = (props: PropsType) => {
	const { setFileList } = props

	const handleChange: UploadProps['onChange'] = (info) => {
		let newFileList = [...info.fileList]

		newFileList = newFileList.slice(-4)

		newFileList = newFileList.map((file) => {
			if (file.response) {
				file.url = file.response.url
			}
			return file
		})

		setFileList(newFileList)

		if (info.file.status !== 'uploading') {
			// console.log(info.file, info.fileList)
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} файл успешно загружен.`)
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} в процессе загрузки файла произошла ошибка.`)
		}
	}

	const uploadProps = {
		accept: '.jpg, .jpeg, .png, .pdf, .docx',
		onChange: handleChange,
		multiple: true,
	}

	return (
		<Upload {...uploadProps} {...props}>
			<Button type="button" className={s.button}>
				<UploadOutlined rev={{}} className={s.icon} /> Приложите файл с реквизитами
			</Button>
		</Upload>
	)
}
