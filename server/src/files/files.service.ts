import { Injectable, BadRequestException } from '@nestjs/common'
import { createReadStream, unlink } from 'fs'
import { promisify } from 'util'

const unlinkAsync = promisify(unlink)

@Injectable()
export class FilesService {
	async uploadFile(file: Express.Multer.File): Promise<string> {
		if (!file) {
			throw new BadRequestException('No file uploaded.')
		}

		const filePath = file.path // Путь к загруженному файлу
		return filePath
	}

	async deleteFile(filePath: string): Promise<void> {
		await unlinkAsync(filePath)
	}
}
