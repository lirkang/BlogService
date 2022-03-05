import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './config/response.filter'
import { TransformInterceptor } from './config/response.interceptor'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.useStaticAssets('public', { prefix: '/public' })
	app.enableCors()
	app.setGlobalPrefix('/data')
	app.useGlobalInterceptors(new TransformInterceptor())
	app.useGlobalFilters(new HttpExceptionFilter())

	await app.listen(623)
}
bootstrap()
