import { Injectable, PipeTransform } from '@nestjs/common'
import * as path from 'path'
import * as sharp from 'sharp'

@Injectable()
export class SharpPipe implements PipeTransform<Express.Multer.File, Promise<string>> {
	private readonly path: string

	constructor(path: string) {
		this.path = path
	}

	async transform(image: Express.Multer.File): Promise<string> {
		if (!image) return

		const originalName = path.parse(image.originalname).name
		const filename = originalName + '-' + Date.now() + '.webp'

		await sharp(image.buffer)
			.resize(800)
			.webp({ effort: 3 })
			.toFile(path.join(`${process.env.FILES_PATH}${this.path}`, filename))

		return filename
	}
}
