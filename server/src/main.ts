import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

const start = async () => {
	const PORT = process.env.PORT || 5000
	const app = await NestFactory.create(AppModule, { cors: true })

	// for swagger
	const config = new DocumentBuilder()
		.setTitle('Safes')
		.setDescription('Документация Safes REST API')
		.setVersion('1.0.0')
		.addTag('tag')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/api/docs', app, document)

	await app.listen(PORT, () => console.log(`server stared on ${PORT} port`))
}

start()
