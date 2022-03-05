import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './config/response.filter'
import { TransformInterceptor } from './config/response.interceptor'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('/blog')
	app.useGlobalInterceptors(new TransformInterceptor())
	app.useGlobalFilters(new HttpExceptionFilter())

	await app.listen(623)
}
bootstrap()
