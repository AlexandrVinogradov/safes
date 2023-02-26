import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const start = async () => {
	const PORT = process.env.PORT || 5000
	const app = await NestFactory.create(AppModule)

	await app.listen(5000, () => console.log(`server stared on ${PORT} port`))
}

start()
