import { Injectable, PipeTransform } from '@nestjs/common'
import * as path from 'path'
import * as sharp from 'sharp'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class SharpPipe implements PipeTransform<Express.Multer.File | Express.Multer.File[], Promise<string | string[]>> {
	private readonly path: string

	constructor(path: string) {
		this.path = path
	}

	async transform(images: Express.Multer.File | Express.Multer.File[]): Promise<string | string[]> {
		if (!images) return

		const processedImages: string[] = []

		if (!Array.isArray(images)) {
			images = [images]
		}

		for (const image of images) {
			const originalName = path.parse(image.originalname).name

			let filename = originalName

			// Проверяем, содержит ли имя файла UUID
			const uuidMatch = filename.match(/-[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}/i)
			if (uuidMatch) {
				// Заменяем существующий UUID на новый
				filename = filename.replace(uuidMatch[0], `-${uuidv4()}`)
			} else {
				// Добавляем новый UUID к имени файла
				filename += `-${uuidv4()}`
			}

			filename += '.webp'

			await sharp(image.buffer)
				.resize(800)
				.webp({ effort: 3 })
				.toFile(path.join(`${process.env.FILES_PATH}${this.path}`, filename))

			processedImages.push(filename)
		}

		return processedImages
	}
}
